import {
  GAME_STATE_KEY,
  retrieveGameState,
  storeGameState,
} from '../persistent-storage'
import { gameStateMocks } from './mocks'

beforeEach(() => {
  localStorage.clear()
})

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

describe('retrieve-game-state', () => {
  test.each(gameStateMocks)(
    'should retrieve correct game-state from localStorage',
    ({ initial }) => {
      storeGameState(initial)
      expect(retrieveGameState()).toEqual(initial)
    }
  )

  test('should return null if game-state is not saved', () => {
    expect(retrieveGameState()).toBe(null)
  })
})
