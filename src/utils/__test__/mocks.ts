import { GameState, GameStateRow } from '../../types'
import { range } from 'lodash'

interface GameStateMock {
  columns: number
  initial: GameState
  movedUp: GameState
  movedLeft: GameState
  horizontalRows: GameStateRow[]
  verticalRows: GameStateRow[]
  emptyIndexes: number[]
}

export const gameStateMocks: GameStateMock[] = [
  {
    columns: 4,
    initial: Array(16).fill(null),
    movedUp: Array(16).fill(null),
    movedLeft: Array(16).fill(null),
    horizontalRows: Array(4).fill(Array(4).fill(null)),
    verticalRows: Array(4).fill(Array(4).fill(null)),
    emptyIndexes: range(0, 15),
  },
  {
    columns: 4,
    initial: [
      2,
      4,
      2,
      16,
      null,
      2,
      null,
      null,
      4,
      null,
      2,
      null,
      null,
      8,
      2,
      null,
    ],
    movedUp: [
      2,
      4,
      4,
      16,
      4,
      2,
      2,
      null,
      null,
      8,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    movedLeft: [
      2,
      4,
      2,
      16,
      2,
      null,
      null,
      null,
      4,
      2,
      null,
      null,
      8,
      2,
      null,
      null,
    ],
    horizontalRows: [
      [2, 4, 2, 16],
      [null, 2, null, null],
      [4, null, 2, null],
      [null, 8, 2, null],
    ],
    verticalRows: [
      [2, null, 4, null],
      [4, 2, null, 8],
      [2, null, 2, 2],
      [16, null, null, null],
    ],
    emptyIndexes: [4, 6, 7, 9, 11, 12, 15],
  },
]
