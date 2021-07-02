import React from 'react'
import './App.css'

function App() {
  const [inventary, setInventary] = React.useState()

  React.useEffect(() => {
    getInventory()
  }, [])

  const getInventory = async () => {
    const response = await (await fetch('/api/get')).json()

    setInventary(response)
    return response
  }

  return (
    <div className="App">
      <header className="App-header">
        <button>Add inventory</button>
        <button>Check invenotry</button>
        <button>Sell items</button>

        <h4>There are {inventary} items in the inventary :o</h4>
      </header>
    </div>
  )
}

export default App
