import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'
import { Direction } from '../types'
import { moveGameState } from '../utils/move'
import { generateInitialGameState } from '../utils/initial'
import { retrieveGameState, storeGameState } from '../utils/persistent-storage'
import { addRandomCellValueToGameState } from '../utils/cells'

const useGame = (columns: number) => {
  const [gameState, setGameState] = useState(
    retrieveGameState() || generateInitialGameState(columns)
  )

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

  const restart = () => setGameState(generateInitialGameState(columns))

  return {
    gameState,
    move,
    restart,
  }
}

export default useGame
