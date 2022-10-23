import {
  convertGameStateToHorizontalRows,
  convertGameStateToVerticalRows,
} from '../rows'
import { gameStateMocks } from './mocks'

describe('convert-game-state-to-horizontal-rows', () => {
  test.each(gameStateMocks)(
    'should return valid horizontal-rows for game-state',
    ({ initial, horizontalRows, columns }) => {
      expect(convertGameStateToHorizontalRows(initial, columns)).toEqual(
        horizontalRows
      )
    }
  )
})

describe('convert-game-state-to-vertical-rows', () => {
  test.each(gameStateMocks)(
    'should return valid vertical-rows for game-state',
    ({ initial, verticalRows, columns }) => {
      expect(convertGameStateToVerticalRows(initial, columns)).toEqual(
        verticalRows
      )
    }
  )
})
