import './Styles.css'

import SideBar from './components/SideBar'
import AppRoutes from './routes'

function App() {

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
