import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [jokesData, setJokesData] = useState({})

  const fetchData = async () => {
    let response = await fetch('https://official-joke-api.appspot.com/jokes/random')
    let data = await response.json()
    setJokesData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Jokes Generator</h1>
      <div className="jokes-container">
        <div className="jokes">
          <p>{jokesData.setup}</p>
          <p><b>{jokesData.punchline}</b></p>
        </div>
      </div>
    </>
  )
}

export default App
