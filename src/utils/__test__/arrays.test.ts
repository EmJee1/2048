import {
  arrayPadEnd,
  arrayPadStart,
  getRandomEmptyIndexFromGameState,
} from '../arrays'
import { gameStateMocks } from './mocks'

describe('get-random-empty-index-from-game-state', () => {
  test.each(gameStateMocks)(
    'returns a valid empty field index',
    ({ initial, emptyIndexes }) => {
      expect(emptyIndexes).toContain<number>(
        getRandomEmptyIndexFromGameState(initial)
      )
    }
  )

  test('throws error if array has no null-values', () => {
    expect(() => getRandomEmptyIndexFromGameState([2, 8, 4, 6])).toThrow(Error)
  })
})

describe('array-pad-end', () => {
  test.each([
    { array: [2, 4, 2], result: [2, 4, 2, null], padValue: null, length: 4 },
    {
      array: [4, 8],
      result: [4, 8, null, null, null, null],
      padValue: null,
      length: 6,
    },
    { array: [], result: [null, null, null], padValue: null, length: 3 },
  ])(
    'returns the valid array with start-padding',
    ({ array, result, padValue, length }) => {
      expect(arrayPadEnd(array, padValue, length)).toEqual(result)
    }
  )
})

describe('array-pad-start', () => {
  test.each([
    { array: [2, 4, 2], result: [null, 2, 4, 2], padValue: null, length: 4 },
    {
      array: [4, 8],
      result: [null, null, null, null, 4, 8],
      padValue: null,
      length: 6,
    },
    { array: [], result: [null, null, null], padValue: null, length: 3 },
  ])(
    'returns the valid array with start-padding',
    ({ array, result, padValue, length }) => {
      expect(arrayPadStart(array, padValue, length)).toEqual(result)
    }
  )
})
