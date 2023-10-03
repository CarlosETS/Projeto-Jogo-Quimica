import { Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function FormData({ formData }) {
  const initialValues = formData.reduce((total, current) => {
    return { ...total, [current.id]: "" };
  }, {});

  const getControl = (type, id, config) => {
    switch (type) {
      case "question":
        return (
          <Field
            size="small"
            variant="outlined"
            fullWidth={true}
            component={TextField}
            name={id}
            label={id}
          />
        );
      default:
        return <div>{type}</div>;
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ submitForm, isSubmitting }) => (
        <Droppable droppableId="form_droppable" type="controls">
          {(provided, snapshot) => (
            <div>
              <List
                style={{
                  backgroundColor: "#f9fafb",
                  borderStyle: "dotted",
                  minHeight: "200px",
                  width: "400px",
                  overflow: "auto"
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {formData.map((data, index) => (
                  <Draggable
                    key={`form_draggable_${index}`}
                    draggableId={`form_draggable_${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        {/* <div
                      style={{
                        borderStyle: "dotted",
                        padding: "10px",
                        width: "400px"
                      }}
                      {...provided.dragHandleProps}
                    >
                      {data.type}
                    </div> */}
                        <Card
                          style={{
                            padding: "10px",
                            width: "100%"
                          }}
                          {...provided.dragHandleProps}
                        >
                          {getControl(data.type, data.id)}
                        </Card>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                <ListItem>
                  <Button
                    onClick={submitForm}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </ListItem>
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      )}
    </Formik>
  );
}
