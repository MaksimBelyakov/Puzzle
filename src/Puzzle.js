import React, { useReducer } from 'react';
import reducer from './reducer';
import './Puzzle.css'

const Puzzle = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: [4, 1, 2, 7, 6, 3, null, 5, 8]
  });  
  // describe('reducer', () => { 
  //   it('should be able to move 1 down if gap below',  ()=>{
  //     let state = {
  //       items: [1, 2, 3, null, 5, 6, 7, 8, 4],
  //     }

  //     state = reducer(state, {type: 'move', payload: 0})
  //     expect(state.items).toEqual([
  //       null,
  //       '2',
  //       '3',
  //       '1',
  //       '5',
  //       '6',
  //       '7',
  //       '8',
  //       '4'
  //     ])
  //   })
  //   it('should say when it is complete', ()=>{
  //     let state = {
  //       items: ['1', '2', '3', '4', '5', '6', '7', null, '8'],
  //     }

  //     state = reducer(state, {type: 'move', payload: 8})
  //     expect(state.complete).toBe(true)
  //     state = reducer(state, {type: 'move', payload: 5})
  //     expect(state.complete).toBe(false)
  //   })
  //  })


  return (
    <div className='Puzzle'>
      <div className='Puzzle-squares'>
        {
          state.items.map((s, i) => (
            <div className={`Puzzle-square ${
              s ? '' : 'Puzzle-square-empty'
            }`}
            key={`square-${i}`}
            onClick={()=> dispatch({ type: 'move', payload: i })}
            >
              {s}
            </div>
          ))
        }
      </div>
      <div className='Puzzle-controls'>
        <button
          className='Puzzle-shuffle'
          onClick={()=> dispatch({ type: 'shuffle'})}  
        >
          Shuffle
        </button>

        <button
          className='Puzzle-reset'
          onClick={()=> dispatch({ type: 'reset'})}  
        >
          Reset
        </button>
      </div>

      {state.complete && (
        <div className='Puzzle-complete'>Complete!</div>
      )}
    </div>    
  )
  
  
}

export default Puzzle