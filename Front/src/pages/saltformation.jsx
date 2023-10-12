import { useState } from "react";

import Grid from "@mui/material/Grid";
import Controls from "../components/ControlsForm.jsx";
import Operator from "../components/Operator.jsx";
import { DragDropContext } from "react-beautiful-dnd";

function SaltFormation() {
  const [operatorData, setOperatorData] = useState([]);

  const onDragEnd = (data) => {
    const { draggableId, source, destination } = data;
    if (source && destination) {
      if (source.droppableId === "controls_droppable") {
        const newFormControl = {
          id: `${operatorData.length}`,
          type: draggableId,
          config: {}
        };
        const newOperatorData = [...operatorData];
        newOperatorData.splice(destination.index, 0, newFormControl);
        setOperatorData(newOperatorData);
      }
      if (source.droppableId === "operator_droppable") {
        if (source.index !== destination.index) {
          const newOperatorData = [...operatorData];
          const movedFormControl = newOperatorData.splice(source.index, 1)[0];
          newOperatorData.splice(destination.index, 0, movedFormControl);
          console.log(newOperatorData);
          setOperatorData(newOperatorData);
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
          <Operator operatorData={operatorData} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
}

export default SaltFormation;