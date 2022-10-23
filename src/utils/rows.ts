import { GameState, GameStateRow } from '../types'

export const convertGameStateToHorizontalRows = (
  gameState: GameState,
  columns: number
): GameStateRow[] => {
  const gameStateCopy = [...gameState]
  const horizontalRows: GameStateRow[] = []

  const createRows = () => {
    const newRow = gameStateCopy.splice(0, columns)
    horizontalRows.push(newRow)
    if (gameStateCopy.length) {
      createRows()
    }
  }

  createRows()

  return horizontalRows
}

export const convertGameStateToVerticalRows = (
  gameState: GameState,
  columns: number
): GameStateRow[] => {
  const gameStateCopy = [...gameState]
  const verticalRows: GameStateRow[] = []

  const createRows = (row = 0) => {
    const newRow = Array(columns)
      .fill(0)
      .flatMap((_, i) => {
        return gameStateCopy[i * columns + row]
      })
    verticalRows.push(newRow)

    if (row + 1 < columns) {
      createRows(row + 1)
    }
  }

  createRows()

  return verticalRows
}
