import React, { useState } from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import './modal.css';

const Modal = ({ isOpen, setOpen, title, resume, url}) => {

    const toggleModal = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <div
                    id="defaultModal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal-overlay"
                > 
                    <div className="relative w-full max-w-2xl max-h-full modal-container">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="defaultModal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Fechar</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {resume}
                                </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <a href={url}
                                    type="button"
                                    onClick={toggleModal}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <PlayArrowIcon />
                                    Jogar
                                </a>
                                <a
                                    type="button"
                                    onClick={toggleModal}
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover-text-white dark:hover-bg-gray-600 dark:focus-ring-gray-600"
                                >
                                    Cancelar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
