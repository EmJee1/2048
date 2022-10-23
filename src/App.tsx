import Cell from './components/Cell'
import Grid from './components/Grid'
import useKeydown from './hooks/use-keydown'
import useGame from './hooks/use-game'
import { Direction } from './types'

const App = () => {
  const { move, gameState } = useGame(4)
  useKeydown('ArrowUp', move(Direction.Up))
  useKeydown('ArrowLeft', move(Direction.Left))
  useKeydown('ArrowDown', move(Direction.Down))
  useKeydown('ArrowRight', move(Direction.Right))

  return (
    <div className="App">
      <h1 className="my-4 text-center text-2xl font-bold text-stone-700">
        2048
      </h1>
      <Grid>
        {gameState.map((cellValue, index) => (
          <Cell key={index} value={cellValue} />
        ))}
      </Grid>
    </div>
  )
}

export default App
