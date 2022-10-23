import { GAME_STATE_KEY, storeGameState } from '../persistent-storage'
import { gameStateMocks } from './mocks'

describe('store-game-state', () => {
  test.each(gameStateMocks)('should write to localStorage', ({ initial }) => {
    storeGameState(initial)

    expect(Object.keys(localStorage.__STORE__)).toContain(GAME_STATE_KEY)
    expect(localStorage.__STORE__[GAME_STATE_KEY]).toBe(JSON.stringify(initial))
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      GAME_STATE_KEY,
      JSON.stringify(initial)
    )
  })
})
