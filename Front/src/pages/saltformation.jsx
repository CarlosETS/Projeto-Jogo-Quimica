import { useState } from "react";

import Grid from "@mui/material/Grid";
import Controls from "../components/ControlsForm.jsx";
import Form from "../components/Form.jsx";
import { DragDropContext } from "react-beautiful-dnd";

function SaltFormation() {
  const [formData, setFormData] = useState([]);

  const onDragEnd = (data) => {
    const { draggableId, source, destination } = data;
    if (source && destination) {
      if (source.droppableId === "controls_droppable") {
        const newFormControl = {
          id: `${formData.length}`,
          type: draggableId,
          config: {}
        };
        const newFormData = [...formData];
        newFormData.splice(destination.index, 0, newFormControl);
        setFormData(newFormData);
      }
      if (source.droppableId === "form_droppable") {
        if (source.index !== destination.index) {
          const newFormData = [...formData];
          const movedFormControl = newFormData.splice(source.index, 1)[0];
          newFormData.splice(destination.index, 0, movedFormControl);
          console.log(newFormData);
          setFormData(newFormData);
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid spacing={2} direction="row" container>
        <Grid item>
          <Controls />
        </Grid>
        <Grid item>
          <Form formData={formData} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
}

export default SaltFormation;