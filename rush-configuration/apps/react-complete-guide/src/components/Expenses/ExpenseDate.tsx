interface Props {
  date: Date
}

function ExpenseDate(props: Props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>{month}-</div>
      <div>{year}-</div>
      <div>{day}</div>
    </div>
  )
}

export { ExpenseDate }
