import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>leet-bid</h1>
        <div className="card">
          <button className="btn" onClick={() => setCount((count) => count + 1)}>
            count is {count}
        
          </button>
        </div>
      </div>
    </>
  )
}

export default App
