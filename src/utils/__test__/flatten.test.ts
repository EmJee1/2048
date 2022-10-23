import { flattenHorizontalRows, flattenVerticalRows } from '../flatten'
import { gameStateMocks } from './mocks'

describe('flatten-horizontal-rows', () => {
  test.each(gameStateMocks)(
    'should return valid game-state for horizontal-rows',
    ({ initial, horizontalRows }) => {
      expect(flattenHorizontalRows(horizontalRows)).toEqual(initial)
    }
  )
})

describe('flatten-vertical-rows', () => {
  test.each(gameStateMocks)(
    'should return valid game-state for vertical-rows',
    ({ initial, verticalRows, columns }) => {
      expect(flattenVerticalRows(verticalRows, columns)).toEqual(initial)
    }
  )
})
