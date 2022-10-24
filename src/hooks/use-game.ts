import { useEffect, useState } from 'react'
import { Direction, GameState } from '../types'
import { getRandomEmptyIndexFromGameState } from '../utils/arrays'
import { moveGameState } from '../utils/move'
import { generateInitialGameState } from '../utils/initial'
import { isEqual } from 'lodash'
import { storeGameState } from '../utils/persistent-storage'
import { addRandomCellValueToGameState } from '../utils/cells'

const useGame = (columns: number) => {
  const [gameState, setGameState] = useState(generateInitialGameState(columns))

  useEffect(() => {
    storeGameState(gameState)
  }, [gameState])

  const move = (direction: Direction) => () => {
    const movedGameState = moveGameState(direction, gameState, columns)
    if (isEqual(gameState, movedGameState)) {
      // Move is not possible because values did not change after moving the state
      return
    }

    setGameState(addRandomCellValueToGameState(movedGameState))
  }

  return {
    gameState,
    move,
  }
}

export default useGame
