import Welcome from "../components/Welcome";
import '../assets/home.css'

const Home = () => {
  console.log('BBBB')
  return (
    <>
      <div className="home text-5xl font-bold">
        <h1>QuimiQuiz</h1>

      </div>
      <Welcome />
    </>
  )
}

export default Home;