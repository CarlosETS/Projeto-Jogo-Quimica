import React from 'react';
import '../assets/welcome.css'

const Welcome = () => {
  return (
    
    <div className='welcome'>
        <h2 className='text-4xl'>Seja bem vindo</h2>
        <p className='text-blue-600'>Escolha qual dos jogo deseja jogar:</p>
        <div className='buttons'>
          <a href='/saltformation' id='save' type="button" className="button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Formação de sais</a>
          <a id='save' type="button" className="button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Jogo 2</a>
          <a id='save' type="button" className="button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Jogo 3</a>
        </div>

        <img src="" alt="imagens a serem adicionadas" />
    </div>
  )
}

export default Welcome