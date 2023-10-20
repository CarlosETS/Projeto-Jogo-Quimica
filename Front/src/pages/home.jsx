import Welcome from "../components/Welcome.jsx";
import '../assets/home.css';
import Img from '../img/bk-Image.png';
import Title from '../img/title-image.png';

const Home = () => {
  return (
    <>
      <div className="home text-5xl font-bold">
        <img
          src={Title}
          alt="Título da Página"
          className="title-image"
        />
      </div>
      <div className="bottom-left-image-container">
        <img
          src={Img}
          alt="Explicação das respostas"
          className="bottom-left-image"
        />
      </div>
      <Welcome />
    </>
  )
}

export default Home;
