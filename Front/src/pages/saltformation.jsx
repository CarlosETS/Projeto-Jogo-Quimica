import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ListItem from '../components/ItemList.jsx';
import '../assets/saltformation.css';

function App() {
  const [items, setItems] = useState([
    { id: '1', content: 'NaOH' },
    { id: '2', content: 'H2O' },
    { id: '3', content: 'Na' },
    { id: '4', content: 'OH' },
    { id: '5', content: '+' },
    { id: '6', content: '+' },
    { id: '7', content: '->' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  const checkOrder = () => {
    const correctOrder = items.map((item, index) => `Item ${index + 1}`);
    const isCorrect = JSON.stringify(items.map((item) => item.content)) === JSON.stringify(correctOrder);
    alert(isCorrect ? 'A ordem está correta!' : 'A ordem está incorreta!');
  };

  return (
    <div className="App">
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
                <ListItem key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={checkOrder} className="check-order-button">
        Verificar Ordem
      </button>
    </div>
  );
}

export default App;
