import { GameState } from '../types'

export const GAME_STATE_KEY = 'game-state'

export const storeGameState = (gameState: GameState) => {
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState))
}
