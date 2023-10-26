import React, { useState } from 'react';
import AddNoxQuestions from './admins/addNoxQuestions';
import AddDissociationQuestion from './admins/addDissociationQuestions.jsx';

const AddQuestions = () => {
  const [activeFunctionality, setActiveFunctionality] = useState('addQuestions');

  const handleFunctionalityChange = (functionality) => {
    setActiveFunctionality(functionality);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Adicionar Questões</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Selecione a funcionalidade:
        </label>
        <select
          value={activeFunctionality}
          onChange={(e) => handleFunctionalityChange(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="addQuestions">Adicionar Questões</option>
          <option value="addSaltFormationQuestion">Adicionar Formação de Sal</option>
        </select>
      </div>
      {activeFunctionality === 'addSaltFormationQuestion' ? (
        <AddDissociationQuestion />
      ) : (
        <AddNoxQuestions />
      )}
    </div>
  );
};

export default AddQuestions;
