import { GameState } from '../types'
import { getRandomEmptyIndexFromGameState } from './arrays'

// TODO: make value 90% -> 2, 10% -> 4
export const addRandomCellValueToGameState = (gameState: GameState) => {
  const updatedGameState = [...gameState]
  const cellToAdd = getRandomEmptyIndexFromGameState(gameState)
  updatedGameState[cellToAdd] = 2
  return updatedGameState
}
