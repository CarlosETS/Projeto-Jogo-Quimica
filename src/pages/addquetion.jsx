// import { DragDropContext } from 'react-beautiful-dnd';
import SideBar from "../components/SideBar";

const AddQuestions = () => {
  console.log('BBBB')
  return (
    <>
      <SideBar />
      <div className='container'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </>
  )
}

export default AddQuestions;