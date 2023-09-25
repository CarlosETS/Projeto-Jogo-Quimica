import './Styles.css'
import SideBar from './components/SideBar'
import AppRoutes from './routes'

function App() {

  return (
    <div className='flex'>
      <SideBar/>

      <AppRoutes />
    </div>
  )
}

export default App
