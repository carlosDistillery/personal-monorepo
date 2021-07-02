import { ExpenseDate } from './ExpenseDate'

interface Props {
  date: Date
  title: string
  amount: number
  id: string
}

function ExpenseItem(props: Props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.amount}</div>
      <ExpenseDate date={props.date} />
    </div>
  )
}

export { ExpenseItem }
