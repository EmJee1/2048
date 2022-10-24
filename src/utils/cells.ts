import { random } from 'lodash'
import { GameState } from '../types'
import { getRandomEmptyIndexFromGameState } from './arrays'

export const getRandomCellValue = () => {
  const percentage = random(1, 10)
  if (percentage > 1) {
    return 2
  }

  return 4
}

export const addRandomCellValueToGameState = (gameState: GameState) => {
  const updatedGameState = [...gameState]
  const cellToAdd = getRandomEmptyIndexFromGameState(gameState)
  updatedGameState[cellToAdd] = getRandomCellValue()
  return updatedGameState
}
