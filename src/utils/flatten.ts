import { GameState, GameStateRow } from '../types'

export const flattenHorizontalRows = (verticalRows: GameStateRow[]) => {
  return verticalRows.flat() as GameState
}

export const flattenVerticalRows = (
  verticalRows: GameStateRow[],
  columns: number
): GameState => {
  return Array(columns)
    .fill(0)
    .flatMap((_, column) => {
      return verticalRows.map((row) => row[column])
    })
}
