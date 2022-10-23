interface GridProps {
  children: JSX.Element | JSX.Element[]
}

const Grid = ({ children }: GridProps) => {
  return (
    <div className="mx-auto grid w-fit grid-cols-4 gap-1 border-4 border-stone-400 bg-stone-400">
      {children}
    </div>
  )
}

export default Grid
