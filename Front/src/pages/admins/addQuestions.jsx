import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import questoesService from '../../services/QuestionService';

import '../../assets/addquestions.css';

const AddQuestions = () => {
  const validationSchema = Yup.object().shape({
    question: Yup.string().required('A pergunta é obrigatória'),
    responses: Yup.array()
      .of(
        Yup.object().shape({
          text: Yup.string().required('O texto da resposta é obrigatório'),
          isCorrect: Yup.boolean(),
        })
      )
      .min(1, 'Pelo menos uma resposta deve ser marcada como correta')
      .test('atLeastOneCorrect', 'Pelo menos uma resposta deve ser marcada como correta', (responses) =>
        responses.some((response) => response.isCorrect)
      ),
  });

  const [responseCount, setResponseCount] = useState(1);

  const formik = useFormik({
    initialValues: {
      question: '',
      responses: [{ text: '', isCorrect: false }],
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log('Form values:', values);
        await questoesService.create(values.question, values.responses);
        console.log('TERMINEI');
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleAddResponse = () => {
    setResponseCount(responseCount + 1);
    formik.setValues({
      ...formik.values,
      responses: [...formik.values.responses, { text: '', isCorrect: false }],
    });
  };

  const handleDeleteAnswer = (index) => {
    setResponseCount(responseCount - 1);
    const newValues = formik.values.responses.filter((_, i) => i !== index);

    formik.setValues({
      ...formik.values,
      responses: newValues,
    });
  };

  const handleResponseChange = (index, newText) => {
    const updatedResponses = formik.values.responses.map((response, i) => {
      if (i === index) {
        return { ...response, text: newText };
      }
      return response;
    });

    formik.setValues({
      ...formik.values,
      responses: updatedResponses,
    });
  };

  const handleCorrectAnswerChange = (index) => {
    const updatedResponses = formik.values.responses.map((response, i) => {
      return i === index ? { ...response, isCorrect: true } : { ...response, isCorrect: false };
    });

    formik.setValues({
      ...formik.values,
      responses: updatedResponses,
    });
  };

  return (
    <div className="add-questions-container">
      {formik.touched.responses && formik.errors.responses && (
        <div className="text-red-600 font-bold text-lg mb-2">
          {formik.errors.responses}
        </div>
      )}
      {formik.touched.question && formik.errors.question && (
        <div className="text-red-600">{formik.errors.question}</div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Criar Questões</h2>
      <form onSubmit={formik.handleSubmit}>
        <textarea
          type="text"
          id="question"
          name="question"
          value={formik.values.question}
          onChange={formik.handleChange}
          placeholder="Pergunta"
          className="w-full p-2 block mb-2 border border-gray-300 rounded-lg"
        />
        {formik.values.responses.map((response, index) => (
          <div key={index} className="response-container flex items-center mb-2">
            <input
              type="text"
              id={`response-${index}`}
              value={response.text}
              onChange={(e) => handleResponseChange(index, e.target.value)}
              placeholder={`Resposta ${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="button-with-icon">
              <input
                type="radio"
                id={`correct-${index}`}
                className="correct-answer-checkbox"
                checked={response.isCorrect}
                title="Resposta Correta"
                onChange={() => handleCorrectAnswerChange(index)}
              />
              <IconButton
                onClick={() => handleDeleteAnswer(index)}
                className="delete-response-button"
                title="Excluir"
              >
                <DeleteIcon className="button-icon" />
              </IconButton>
            </div>
          </div>
        ))}
        {responseCount < 4 && (
          <div className="action-buttons mt-4">
            <IconButton
              onClick={handleAddResponse}
              className="add-response-button pulse"
              title="Adicionar respostas"
            >
              <AddIcon />
            </IconButton>
          </div>
        )}
        <a
          type="submit"
          className="button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ml-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Salvar
        </a>
        <a
          href="/home"
          id="cancel"
          className="button focus:outline-none text-white bg-red-700 hover-bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ml-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Cancelar
        </a>
      </form>
    </div>
  );
};

export default AddQuestions;
