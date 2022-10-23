import { sample } from 'lodash'
import { GameState } from '../types'

export const getRandomEmptyIndexFromGameState = (
  gameState: GameState
): number => {
  const emptyCellIndexes = gameState
    .map((v, i) => ({ v, i }))
    .filter(({ v }) => v === null)
    .map(({ i }) => i)

  const randomIndex = sample(emptyCellIndexes)
  if (randomIndex === undefined) {
    throw new Error('No random index found')
  }

  return randomIndex
}

export const arrayPadStart = <T>(
  array: T[],
  padValue: T,
  length: number
): T[] => {
  if (array.length === length) {
    return array
  }

  return arrayPadStart([padValue, ...array], padValue, length)
}

export const arrayPadEnd = <T>(array: T[], padValue: T, length: number) => {
  return Array.from({ ...array, length }).map((value) => value ?? null)
}
