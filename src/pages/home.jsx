// import { DragDropContext } from 'react-beautiful-dnd';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  console.log('BBBB')
  return(
    <>
    <h2>HOME</h2>
    <Button
      component={Link}
      to={'/workbench'}
      variant="contained"
      color="primary"
    >
      Ir para Home
    </Button>
  </>
  )
}

export default Home;