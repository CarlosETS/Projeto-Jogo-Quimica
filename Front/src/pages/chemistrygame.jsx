import { useEffect, useState } from "react"

const initialState = [
  { id: 1, name: 'Todo #1', state: 'todo' },
  { id: 2, name: 'Todo #2', state: 'todo' },
  { id: 3, name: 'Todo #3', state: 'todo' },
  { id: 4, name: 'IP #1', state: 'ip' },
  { id: 5, name: 'IP #2', state: 'ip' },
  { id: 6, name: 'IP #3', state: 'ip' },
  { id: 7, name: 'Done #1', state: 'done' },
  { id: 8, name: 'Done #2', state: 'done' },
  { id: 9, name: 'Done #3', state: 'done' }
]

const ChemistryGame = () => {
  const [cards, setCards] = useState(initialState)

  const drag = event => {
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id)
  }
  const dragEnter = event => {
    event.currentTarget.classList.add('drop')
  }

  const dragLeave = event => {
    event.currentTarget.classList.remove('drop')
  }

  const allowDrop = event => {
    event.preventDefault()
  }

  const drop = event => {
    const column = event.currentTarget.dataset.column
    const id = Number(event.dataTransfer.getData('text/plain'))

    event.currentTarget.classList.remove('drop')

    event.preventDefault()

    const updatedState = cards.map(card => {
      if (card.id === id) {
        card.state = column
      }

      return card
    })

    setCards(updatedState)
  }

  const dragStart = event => {
    if (event.target.className.includes('card')) {
      event.target.classList.add('dragging')
    }
  }

  const dragEnd = event => {
    if (event.target.className.includes('card')) {
      event.target.classList.remove('dragging')
    }
  }

  useEffect(() => {
    document.addEventListener('dragstart', dragStart)
    document.addEventListener('dragend', dragEnd)

    return () => {
      document.removeEventListener('dragstart', dragStart)
      document.removeEventListener('dragend', dragEnd)
    }
  }, [])

  return (
    <div className="container">
      <main className="board">
        <div className="column column-todo" data-column="todo" onDragEnter={dragEnter} onDragLeave={dragLeave}
          onDragOver={allowDrop} onDrop={drop}>
          <h2>Todo</h2>
          {cards.filter(card => card.state === 'todo').map(todo => (
            <article key={todo.id} className="card" draggable="true" onDragStart={drag} data-id={todo.id}>
              <h3>{todo.name}</h3>
            </article>
          ))}
        </div>

        <div className="column column-ip" data-column="ip" onDragEnter={dragEnter} onDragLeave={dragLeave}
          onDragOver={allowDrop} onDrop={drop}>
          <h2>IP</h2>
          {cards.filter(card => card.state === 'ip').map(todo => (
            <article key={todo.id} className="card" draggable="true" onDragStart={drag} data-id={todo.id}>
              <h3>{todo.name}</h3>
            </article>
          ))}
        </div>

        <div className="column column-done" data-column="done" onDragEnter={dragEnter} onDragLeave={dragLeave}
          onDragOver={allowDrop} onDrop={drop}>
          <h2>IP</h2>
          {cards.filter(card => card.state === 'done').map(todo => (
            <article key={todo.id} className="card" draggable="true" onDragStart={drag} data-id={todo.id}>
              <h3>{todo.name}</h3>
            </article>
          ))}
        </div>
      </main >
    </div >
  )
}

export default ChemistryGame;
