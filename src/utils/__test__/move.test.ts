import { moveGameState, moveRow } from '../move'
import { Direction } from '../../types'
import { gameStateMocks } from './mocks'

describe('move-row', () => {
  test.each([
    {
      initial: [1, null, 8, null],
      movedLeft: [1, 8, null, null],
      movedRight: [null, null, 1, 8],
      movedUp: [1, 8, null, null],
      movedDown: [null, null, 1, 8],
    },
    {
      initial: [null, null, 8, 16],
      movedLeft: [8, 16, null, null],
      movedRight: [null, null, 8, 16],
      movedUp: [8, 16, null, null],
      movedDown: [null, null, 8, 16],
    },
    {
      initial: [null, 2, 2, 2],
      movedLeft: [4, 2, null, null],
      movedRight: [null, null, 2, 4],
      movedUp: [4, 2, null, null],
      movedDown: [null, null, 2, 4],
    },
  ])(
    'should return moved row',
    ({ initial, movedLeft, movedRight, movedUp, movedDown }) => {
      expect(moveRow(Direction.Left, initial)).toEqual(movedLeft)
      expect(moveRow(Direction.Right, initial)).toEqual(movedRight)
      expect(moveRow(Direction.Up, initial)).toEqual(movedUp)
      expect(moveRow(Direction.Down, initial)).toEqual(movedDown)
    }
  )
})

describe('move-game-state', () => {
  test.each(gameStateMocks)(
    'should move game-state',
    ({ initial, movedLeft, movedUp, columns }) => {
      expect(moveGameState(Direction.Left, initial, columns)).toEqual(movedLeft)
      expect(moveGameState(Direction.Up, initial, columns)).toEqual(movedUp)
    }
  )
})
