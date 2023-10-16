import Welcome from "../components/Welcome.jsx";

import '../assets/home.css'


const Home = () => {

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