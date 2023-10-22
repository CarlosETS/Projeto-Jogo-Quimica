import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

import '../assets/sidebar.css';

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    // Quando o mouse entra na área do botão, inicia um temporizador
    setTimeout(() => {
      setIsHovered(true);
    }, 2000); // Tempo em milissegundos (2 segundos neste exemplo)
  };

  const handleMouseLeave = () => {
    // Quando o mouse sai da área do botão, limpa o temporizador
    setIsHovered(false);
  };

  return (
    <div className="sidebar">
      <div className="min-h-screen h-screen w-16 flex-col justify-between border-e bg-white bg-fixed">
        <div>
          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <a
                    href="/home"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <HomeIcon />
                    <span
                      className={`absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-2 text-xs font-medium text-white ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      } whitespace-nowrap`}
                    >
                      Home
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ranking"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <SportsScoreIcon />
                    <span
                      className={`absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      } whitespace-nowrap`}
                    >
                      Ranking
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/addquestions"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover-bg-gray-50 hover:text-gray-700"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <AddIcon />
                    <span
                      className={`absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-2 text-xs font-medium text-white ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      } whitespace-nowrap`}
                    >
                      Adicionar pergunta
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
