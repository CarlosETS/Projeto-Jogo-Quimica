import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reactionsData, questions } from '../data/ReactionData.jsx';
import '../assets/dissociation.css'; // Importe os estilos CSS
import GameOver from '../components/GameOver.jsx'; // Importe o componente GameOver

function Dissociation() {
  const [items, setItems] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [resetColors, setResetColors] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [orderChecked, setOrderChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrectOrder, setIsCorrectOrder] = useState(false);
  const [totalSets, setTotalSets] = useState(0);

  useEffect(() => {
    shuffleItems();
    setTotalSets(Object.keys(reactionsData).length);
  }, [currentSet]);

  const handleContinue = () => {
    setResetColors(true);
    const nextSet = currentSet < totalSets ? currentSet + 1 : 1; // Verifique se é a última pergunta
    setCurrentSet(nextSet);
    shuffleItems(nextSet);
  };

  const shuffleItems = (setNumber) => {
    const randomSet = setNumber || Math.floor(Math.random() * totalSets) + 1;
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
    const questionDiv = document.getElementById('questionDiv');
    if (questionDiv) {
      questionDiv.innerText = question;
    }
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
      setScore(score + 10); // Adicione pontos quando a ordem estiver correta
      setIsCorrectOrder(true); // Defina isCorrectOrder como verdadeiro
      setShowButton(true); // Mostre o botão de continuar
    } else {
      setTimeout(() => {
        setItemColors([]);
      }, 2000);
      setShowButton(true);
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
    <div className="dissociation">
      {currentSet === totalSets ? (
        <GameOver score={score} totalQuestions={totalSets} relod={'/dissociation'} />
      ) : (
        <div>
          <div className="text">
            Pergunta {currentSet} de {totalSets}
          </div>
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

            <button
              onClick={handleContinue}
              className="continueButton"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dissociation;
