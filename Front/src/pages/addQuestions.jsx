import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import questoesService from '../services/QuestionService';
import AddSaltFormationQuestion from './admins/addSaltFormationQuestions'; // Importe o novo componente
import AddNoxQuestions from './admins/addNoxQuestions';

const AddQuestions = () => {
    const [activeFunctionality, setActiveFunctionality] = useState('addQuestions'); // Estado para controlar a funcionalidade ativa

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
                await questoesService.create(values.question, values.responses).then(() => {
                    console.log('TERMINEI');
                });
            } catch (error) {
                console.log(error);
            }
        },
    });

    // Função para alternar entre as funcionalidades
    const handleFunctionalityChange = (functionality) => {
        setActiveFunctionality(functionality);
    };

    // Renderize o componente com base na funcionalidade ativa
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 w-96">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Funcionalidade</h2>
                {/* Seletor de funcionalidade */}
                <select
                    value={activeFunctionality}
                    onChange={(e) => handleFunctionalityChange(e.target.value)}
                >
                    <option value="addQuestions">Adicionar Questões</option>
                    <option value="addSaltFormationQuestion">Adicionar Formação de Sal</option>
                </select>

                {activeFunctionality === 'addQuestions' && (
                    <div>
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
                            {/* Restante do código para adicionar questões */}
                        </form>
                    </div>
                )}

                {activeFunctionality === 'addSaltFormationQuestion' ? (
                    <AddSaltFormationQuestion />
                ) : (
                    <AddNoxQuestions />
                )}
            </div>
        </div>
    );
};

export default AddQuestions;
