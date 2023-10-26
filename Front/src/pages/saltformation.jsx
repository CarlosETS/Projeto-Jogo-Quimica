import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reactionsData, questions } from '../data/ReactionData.jsx';
import '../assets/saltformation.css'; // Importe os estilos CSS

function SaltFormation() {
  const [items, setItems] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [resetColors, setResetColors] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [orderChecked, setOrderChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrectOrder, setIsCorrectOrder] = useState(false);

  useEffect(() => {
    shuffleItems();
  }, [currentSet]);

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
    setOrderChecked(false);

    const question = questions[`set${randomSet}`];
    console.log('Pergunta:', question);

    // Atualize o conteúdo da pergunta na interface
    document.getElementById('questionDiv').innerText = question;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
  
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
  
    setItems(reorderedItems);
  
    // Calcule a nova altura do container com base na posição do bloco
    const newHeight = draggableBlock.offsetTop + draggableBlock.clientHeight;
  
    // Defina a altura do container para a nova altura
    container.style.height = newHeight + 'px';
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
      setScore(score + 10); // Adicione pontos quando a ordem estiver correta
      setIsCorrectOrder(true);
    } else {
      setTimeout(() => {
        setItemColors([]);
        setShowButton(true);
      }, 2000);
    }
  };  

  const renderReactions = () => {
    return (
      <ol className="listContainer">
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`item ${resetColors ? '' : itemColors[index]}`}
              >
                {item.content}
              </div>
            )}
          </Draggable>
        ))}
      </ol>
    );
  };
  

  return (
    <div className="saltFormation">
      <div className="score">Score: {score}</div>
      <div id="questionDiv" className="questionDiv">
        Conteúdo da Pergunta
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="none">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {renderReactions()}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="buttons">
        <button
          onClick={checkOrder}
          className="checkOrderButton"
          disabled={orderChecked}
        >
          Verificar Ordem
        </button>

        {showButton && (
          <button
            onClick={handleContinue}
            className="continueButton"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}

export default SaltFormation;
