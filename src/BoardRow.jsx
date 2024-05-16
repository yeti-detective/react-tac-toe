import Square from './Square';

export default function BoardRow({turn, reset}) {
  
  return <div className="board-row">
    <Square turn={turn} reset={reset} />
    <Square turn={turn} reset={reset} />
    <Square turn={turn} reset={reset} />
  </div>
}