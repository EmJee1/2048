import { useState } from 'react'
import { Direction } from '../types'
import { getRandomEmptyIndexFromGameState } from '../utils/arrays'
import { moveGameState } from '../utils/move'
import { generateInitialGameState } from '../utils/initial'
import { isEqual } from 'lodash'
import { storeGameState } from '../utils/persistent-storage'

const useGame = (columns: number) => {
  const [gameState, setGameState] = useState(generateInitialGameState(columns))

  const addCellValue = () => {
    const cellToAdd = getRandomEmptyIndexFromGameState(gameState)

    setGameState((gs) => {
      gs[cellToAdd] = 2
      return gs
    })
  }

  const move = (direction: Direction) => () => {
    const movedGameState = moveGameState(direction, gameState, columns)
    if (isEqual(gameState, movedGameState)) {
      // Move is not possible because values did not change after moving the state
      return
    }

    setGameState(movedGameState)
    addCellValue()
    storeGameState(gameState)
  }

  return {
    gameState,
    move,
  }
}

export default useGame
