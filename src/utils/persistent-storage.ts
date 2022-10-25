import { GameState } from '../types'

export const GAME_STATE_KEY = 'game-state'

export const storeGameState = (gameState: GameState) => {
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState))
}

export const retrieveGameState = (): GameState | null => {
  const stored = localStorage.getItem(GAME_STATE_KEY)
  if (!stored) {
    return null
  }

  return JSON.parse(stored)
}
