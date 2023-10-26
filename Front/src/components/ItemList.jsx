// src/ListItem.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ListItem = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided) => (
                <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="list-item"
                >
                    {item.content}
                </li>
            )}
        </Draggable>
    );
};

export default ListItem;
