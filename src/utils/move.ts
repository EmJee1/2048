import { CellValue, Direction, GameState, GameStateRow } from '../types'
import { flattenHorizontalRows, flattenVerticalRows } from './flatten'
import {
  convertGameStateToHorizontalRows,
  convertGameStateToVerticalRows,
} from './rows'
import { arrayPadEnd, arrayPadStart } from './arrays'

export const moveRow = (direction: Direction, row: GameStateRow) => {
  const toLeft = [Direction.Up, Direction.Left].includes(direction)

  const mergeCells = (cells: CellValue[]) => {
    const cellsToMerge = toLeft ? cells : cells.reverse()
    const mergedCells = cellsToMerge.reduce<CellValue[]>(
      (acc, currentValue, currentIndex) => {
        if (acc[currentIndex - 1] === currentValue) {
          acc[currentIndex - 1]! *= 2
        } else {
          acc.push(currentValue)
        }

        return acc
      },
      []
    )
    return toLeft ? mergedCells : mergedCells.reverse()
  }

  const padMovedRow = (valuesArray: CellValue[]) => {
    if (toLeft) {
      return arrayPadEnd(valuesArray, null, row.length)
    }

    return arrayPadStart(valuesArray, null, row.length)
  }

  return padMovedRow(mergeCells(row.filter(Boolean)))
}

export const moveGameState = (
  direction: Direction,
  gameState: GameState,
  columns: number
): GameState => {
  const toRows = () => {
    if (direction === Direction.Up || direction === Direction.Down) {
      return convertGameStateToVerticalRows(gameState, columns)
    }

    return convertGameStateToHorizontalRows(gameState, columns)
  }

  const flatten = (rows: GameStateRow[]) => {
    if (direction === Direction.Up || direction === Direction.Down) {
      return flattenVerticalRows(rows, columns)
    }

    return flattenHorizontalRows(rows)
  }

  const rows = toRows()
  const movedRows = rows.map((row) => moveRow(direction, row))
  return flatten(movedRows)
}
