import { ExpenseItem } from './ExpenseItem'

function Expenses() {
  const values = [
    {
      id: 'nani',
      title: 'New Desk',
      amount: 94.56,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'nani2',
      title: 'Monitor',
      amount: 100.56,
      date: new Date(2021, 7, 12),
    },
  ]

  return (
    <div>
      {values.map((item) => {
        return <ExpenseItem key={item.id} {...item} />
      })}
    </div>
  )
}
export { Expenses }
