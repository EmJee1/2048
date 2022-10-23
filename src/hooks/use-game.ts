import { useEffect, useState } from 'react'
import { Direction, GameState } from '../types'
import { getRandomEmptyIndexFromGameState } from '../utils/arrays'
import { moveGameState } from '../utils/move'
import { generateInitialGameState } from '../utils/initial'
import { isEqual } from 'lodash'
import { storeGameState } from '../utils/persistent-storage'

// TODO: move this to designated util file
// TODO: make value 90% -> 2, 10% -> 4
const addCellValue = (gameState: GameState) => {
  const cellToAdd = getRandomEmptyIndexFromGameState(gameState)
  const updatedGameState = [...gameState]
  updatedGameState[cellToAdd] = 2
  return updatedGameState
}

const useGame = (columns: number) => {
  const [gameState, setGameState] = useState(generateInitialGameState(columns))

  useEffect(() => {
    console.log('Saving game-state with value:', gameState)
    storeGameState(gameState)
  }, [gameState])

  const move = (direction: Direction) => () => {
    const movedGameState = moveGameState(direction, gameState, columns)
    if (isEqual(gameState, movedGameState)) {
      // Move is not possible because values did not change after moving the state
      return
    }

    setGameState(addCellValue(movedGameState))
  }

  return {
    gameState,
    move,
  }
}

export default useGame
