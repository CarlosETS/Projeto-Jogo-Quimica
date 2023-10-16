import './Styles.css'

import SideBar from './components/SideBar'
import AppRoutes from './routes'

import { QuizContext } from "./context/quiz";
import { useContext } from "react";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='flex'>
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='container'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
