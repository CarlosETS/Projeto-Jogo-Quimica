import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextFieldsIcon from "@mui/icons-material/TextFields";

import "../assets/operator.css"; // Importe o arquivo CSS

const controls = [
  {
    value: "H",
    label: "H",
    icon: "text_fields"
  },
  {
    value: "Cl",
    label: "Cl",
    icon: "calendar_today"
  },
  {
    value: "Cl2",
    label: "Cl2",
    icon: "text_fields"
  },
  {
    value: "Br",
    label: "Br",
    icon: "text_fields"
  },
  {
    value: "Fe",
    label: "Fe",
    icon: "text_fields"
  },
  {
    value: "O",
    label: "O",
    icon: "text_fields"
  },
  {
    value: "OH",
    label: "OH",
    icon: "text_fields"
  },
  {
    value: "K",
    label: "K",
    icon: "text_fields"
  }
];

function ControlsForm() {
  return (
    <Droppable droppableId="controls_droppable" type="controls" isDropDisabled={true}>
      {(provided, snapshot) => (
        <List className="controls-container" {...provided.droppableProps} ref={provided.innerRef}>
          {controls.map((control, index) => (
            <Draggable key={`control_draggable_${control.value}`} draggableId={control.value} index={index}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <ListItem className="list-item">
                    <ListItemIcon>
                      <TextFieldsIcon className="icon" />
                    </ListItemIcon>
                    <ListItemText className="list-item">
                      {control.label}
                    </ListItemText>
                  </ListItem>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
}

export default ControlsForm;
