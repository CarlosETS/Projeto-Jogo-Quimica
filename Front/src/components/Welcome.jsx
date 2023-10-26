import React, { useState } from 'react';

import Modal from './Modal.jsx';

import '../assets/welcome.css';

const Welcome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [url, setUrl] = useState('');

  function createModal(titleParams, resumeParams, urlParams) {
    setOpenModal(true);
    setTitle(titleParams);
    setResume(resumeParams);
    setUrl(urlParams);
  }

  const handleButtonClick = () => {
    createModal(
      'Quiz Nox',
      'O estado de oxidação, também chamado de número de oxidação, é uma abordagem para atribuir o valor da carga que um átomo em uma substância possui.',
      '/quiznox'
    );
  };

  return (
    <>
      <Modal isOpen={openModal} setOpen={setOpenModal} title={title} resume={resume} url={url} />
      <div className='welcome'>
        <h2 className='text-4xl text-indigo-600 font-bold mb-2'>Seja bem-vindo</h2>
        <p className='text-blue-600 font-bold mb-3'>Preparem-se para enfrentar desafios que incorporam princípios químicos<br/> como nomenclatura de ácidos, bases e sais, dissociação e cálculo de Nox.</p>
        <div className='buttons'>
          <a
            id='save'
            type="button"
            onClick={() => createModal(
              'Formação de sais',
              'Geralmente, a formação dos sais se dá por meio de uma reação de neutralização que ocorre entre um ácido e uma base. Se a reação não for neutralizada por completo, o sal formado pode apresentar caráter ácido ou básico. Desse modo, existem três tipos de sais: neutros, de caráter ácido e de caráter básico.',
              '/saltFormation'
            )}
            className="button cursor-pointer text-black bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Formação de sais
          </a>
          <a
            id='save'
            type="button"
            onClick={handleButtonClick}
            className="button cursor-pointer text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Quiz Nox
          </a>
          <a
            id='save'
            type="button"
            onClick={() => createModal(
              'Dissociação',
              'Dissociação eletrolítica, em química, é o processo em que compostos iônicos têm seus íons separados. Estes íons podem voltar a recombinar-se para dar origem ao composto original. Esse processo ocorre apenas com compostos que apresentem ligações iônicas.',
              '/disociation'
            )}
            className="button cursor-pointer text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Dissociação
          </a>
        </div>
      </div>
    </>
  );
}

export default Welcome;
