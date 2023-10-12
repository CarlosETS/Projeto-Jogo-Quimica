import { Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Field, Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import "../assets/operator.css"; // Importe o arquivo CSS

const Operator = ({children }) => {
    const [draggedControls, setDraggedControls] = useState([]);

    const getControl = (type, id, config) => {
        switch (type) {
            case "question":
                return (
                    <Field
                        size="small"
                        variant="outlined"
                        fullWidth={true}
                        name={id}
                        label={id}
                    />
                );
            default:
                return <div>{type}</div>;
        };
    };

    return (
        <Box className="operator-container">
            <Droppable droppableId="left" type="controls" isDropDisabled={false}>
                {(provided, snapshot) => (
                    <div className="operator-blank" ref={provided.innerRef} {...provided.droppableProps}>
                        {draggedControls.filter((control) => control.location === "left").map((control, index) => (
                            <Draggable key={control.value} draggableId={control.value} index={index}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Card className="card-container">
                                            {getControl(control.type, control.id)}
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Box style={{ width: "20%" }}>{children}</Box>
            <Droppable droppableId="right" type="controls" isDropDisabled={false}>
                {(provided, snapshot) => (
                    <div className="operator-blank" ref={provided.innerRef} {...provided.droppableProps}>
                        {draggedControls.filter((control) => control.location === "right").map((control, index) => (
                            <Draggable key={control.value} draggableId={control.value} index={index}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Card className="card-container">
                                            {getControl(control.type, control.id)}
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Box>
    );
};

export default Operator;
