import { useMemo } from "react"

interface CellProp {
  value: number | null
}

const Cell = ({ value }: CellProp) => {
  const backgroundColor = useMemo(() => {
    switch (value) {
      case 2:
        return "bg-stone-50"
      case 4:
        return "bg-stone-200"
      default:
        return "bg-stone-300"
    }
  }, [value])

  return (
    <div className={`grid h-24 w-24 bg-stone-200 ${backgroundColor}`}>
      <span className="flex items-center justify-center text-xl font-bold text-stone-700">
        {value}
      </span>
    </div>
  )
}

export default Cell
