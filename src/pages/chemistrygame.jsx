import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "../assets/chemistrygame.css";

const ChemistryGame = () => {
  const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: '/images/gary.png'
    },
    {
      id: 'cato',
      name: 'Little Cato',
      thumb: '/images/cato.png'
    },
    {
      id: 'kvn',
      name: 'KVN',
      thumb: '/images/kvn.png'
    },
    {
      id: 'mooncake',
      name: 'Mooncake',
      thumb: '/images/mooncake.png'
    },
    {
      id: 'quinn',
      name: 'Quinn Ergon',
      thumb: '/images/quinn.png'
    }
  ]
  const [elementos, setElementos] = useState(finalSpaceCharacters);

  const onDragEnd = (result) => {
    console.log({ result })
    if (!result.destination) return;

    const items = Array.from(elementos)
    console.log({ items })
    const [itemsReorganizados] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, itemsReorganizados);
  }

  return (
    <>
      <SideBar />
      <div className="container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="area-droppable">
            {(provided) => (
              <ul className="elements" {...provided.droppableProps} ref={provided.innerRef}>
                {elementos.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="elements-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  )
}

export default ChemistryGame;