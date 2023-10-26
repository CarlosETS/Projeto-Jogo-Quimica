import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../assets/saltformation.css';
import reactionsData from '../data/ReactionData';

function SaltFormation() {
  const [items, setItems] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [resetColors, setResetColors] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [orderChecked, setOrderChecked] = useState(false);

  useEffect(() => {
    shuffleItems();
  }, []);

  const handleContinue = () => {
    setResetColors(true);
    const nextSet = currentSet < 10 ? currentSet + 1 : 1;
    setCurrentSet(nextSet);
    shuffleItems(nextSet);
  };

  const shuffleItems = (setNumber) => {
    const randomSet = setNumber || Math.floor(Math.random() * 10) + 1;
    const initialItems = reactionsData[`set${randomSet}`];
    const shuffledItems = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
    setCorrectOrder(initialItems.map((item) => item.content));
    setResetColors(false);
    setShowButton(false);
    setOrderChecked(false); // Reset the orderChecked state
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };
  const checkOrder = () => {
    const currentOrder = items.map((item) => item.content);
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);

    const itemColors = currentOrder.map((item, index) => {
      if (correctOrder[index] === item) {
        return 'green';
      }
      return 'red';
    });

    setItemColors(itemColors);
    setOrderChecked(true);

    if (isCorrect) {
      setShowButton(true);
    } else {
      setTimeout(() => {
        setItemColors([]);
        setShowButton(true);
      }, 2000);
    }
  };

  const renderReactions = () => {
    return (
      <div className="reactions">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`reaction-item ${resetColors ? '' : itemColors[index]}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="saltFormation">
      <h1>Arraste e Solte (Drag and Drop) e Verificação de Ordem</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="list-container"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`item ${resetColors ? '' : itemColors[index]}`}
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="buttons">
        <button
          onClick={checkOrder}
          className={`check-order-button ${orderChecked ? 'disabled-button' : ''}`}
          disabled={orderChecked}
        >
          Verificar Ordem
        </button>

        {showButton && (
          <button onClick={handleContinue} className="button">
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}

export default SaltFormation;
