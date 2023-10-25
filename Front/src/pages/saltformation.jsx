import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';
import ListItem from '../components/ItemList.jsx';
import '../assets/saltformation.css';

function SaltFormation() {
  const initialItems = [
    { id: '1', content: 'NaOH' },
    { id: '2', content: '+' },
    { id: '3', content: 'H2O' },
    { id: '4', content: '->' },
    { id: '5', content: 'Na' },
    { id: '6', content: '+' },
    { id: '7', content: 'OH' },
  ];

  const [items, setItems] = useState(initialItems);
  const [correctOrder, setCorrectOrder] = useState([]);

  useEffect(() => {
    shuffleItems();
  }, []);

  const shuffleItems = () => {
    // Função para embaralhar os itens iniciais
    const shuffledItems = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
    checkOrder(reorderedItems);
  };

  const checkOrder = () => {
    const correctOrder = initialItems.map((item) => item.content);
    const currentOrder = items.map((item) => item.content);
  
    console.log(correctOrder);
  
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    setCorrectOrder(isCorrect ? correctOrder : []); // Se correto, defina como a ordem correta, caso contrário, defina como uma matriz vazia
  };
  
  const renderReactions = () => {
    if (correctOrder.length > 0) { // Verifique se a ordem correta não está vazia
      return (
        <div className="reactions">
          {correctOrder.map((item, index) => (
            <div key={index} className="reaction-item">
              {item}
            </div>
          ))}
        </div>
      );
    }
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
      <button onClick={shuffleItems} className="shuffle-button">
        Embaralhar Itens
      </button>
      <button onClick={checkOrder} className="check-order-button">
        Verificar Ordem
      </button>
      {renderReactions()}
    </div>
  );
}

export default SaltFormation;
