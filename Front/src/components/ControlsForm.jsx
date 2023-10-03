import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextFieldsIcon from "@mui/icons-material/TextFields";

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
        <List style={{ backgroundColor: "#005f8c" }} {...provided.droppableProps} ref={provided.innerRef}>
          {controls.map((control, index) => (
            <Draggable key={`control_draggable_${control.value}`} draggableId={control.value} index={index}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <ListItem key={control.value} style={{ backgroundColor: "#005f8c" }}>
                    <ListItemIcon>
                      <TextFieldsIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "white" }}>
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
