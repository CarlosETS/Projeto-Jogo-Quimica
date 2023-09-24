import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="border-t border-gray-100">
          <div className="px-2">

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <a className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  component={Link} to={"/home"}>
                  <HomeIcon />

                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  >
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  component={Link} to={"/ChemistryGame"}
                >
                  <PlayArrowIcon />
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Jogar
                  </span>
                </a>
              </li>

              <li>
                <a className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  component={Link} to={"/ranking"}
                >
                  <SportsScoreIcon />
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Ranking
                  </span>
                </a>
              </li>

              <li>
                <a className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  component={Link} to={"/addquest"}
                >
                  <AddIcon />

                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 whitespace-nowrap"
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
  )
}

export default SideBar;