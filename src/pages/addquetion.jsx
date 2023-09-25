// import { DragDropContext } from 'react-beautiful-dnd';
import '../assets/addquestions.css'

const AddQuestions = () => {
  console.log('aaaa')
  return (
    <>
      <div className='container'>
        <div className='text'>
          <p className="text-xl text-center text-gray-900 dark:text-white">Escreva uma pergunta explicando como determinados elementos <br />
            se combinam ou interagem para formar outro elemento <br />em um contexto específico.</p>
        </div>
        <div className="mb-6">
          <label htmlFor="questions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pergunta</label>
          <input type="text" id="questions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Como é formado o ácido clorídrico?" required />
        </div>
        <div className="mb-6">
          <label htmlFor="response" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Resposta</label>
          <input placeholder='H' type="text" id="response" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="response1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Resposta</label>
          <input placeholder='Cl' type="text" id="response1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className='buttons'>
          <a id='save' type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Salvar</a>
          <a href='/home' id='cancel' type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancelar</a>
        </div>
      </div>
    </>
  )
}

export default AddQuestions;