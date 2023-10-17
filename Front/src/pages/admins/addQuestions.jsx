import React from 'react';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const AddQuestions = () => {
  const formik = useFormik({
    initialValues: {
      question: '',
      responses: [{ text: '', isCorrect: false }],
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  const handleAddResponse = () => {
    formik.setValues({
      ...formik.values,
      responses: [...formik.values.responses, { text: '', isCorrect: false }],
    });
  };

  const handleDeleteAnswer = (index) => {
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
      if (i === index) {
        return { ...response, isCorrect: true };
      } else {
        return { ...response, isCorrect: false };
      }
    });

    formik.setValues({
      ...formik.values,
      responses: updatedResponses,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='container mx-auto p-6 bg-white rounded-lg shadow-lg gap-2'>
        <div className="bg-gray-100 py-2 px-4 w-full">
          <h2 className="text-xl font-semiboldtext-gray-800 ">Criar Questões</h2>
        </div>
        <textarea
          type='text'
          id='question'
          name='question'
          value={formik.values.question}
          onChange={formik.handleChange}
          placeholder='Escreva sua pergunta...'
          className='block mb-2 bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
        {formik.values.responses.map((response, index) => (
          <div key={index} className='flex items-center'>
            <input
              type='text'
              id={`response-${index}`}
              value={response.text}
              onChange={(e) => handleResponseChange(index, e.target.value)}
              placeholder='Digite a resposta...'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-3'
              required
            />
            <input
              type='radio'
              id={`correct-${index}`}
              className={'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700'}
              checked={response.isCorrect}
              onChange={() => handleCorrectAnswerChange(index)}
            />
            <IconButton onClick={() => handleDeleteAnswer(index)}>
              <ClearIcon aria-label='Adicionar mais uma resposta' color='error' fontSize="large"/>
            </IconButton>
          </div>
        ))}
        <IconButton onClick={handleAddResponse}>
          <AddIcon aria-label='Adicionar mais uma resposta' color='primary' />
        </IconButton>

        <button
          type='submit'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        >
          Salvar
        </button>
        <a
          href='/home'
          id='cancel'
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        >
          Cancelar
        </a>
      </div>
    </form>
  );
};

export default AddQuestions;
