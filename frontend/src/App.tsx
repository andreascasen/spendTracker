import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
		<h1 className='text-3xl font-bold underline'>Spend Tracker</h1>
	  </div>
    </>
  )
}

export default App
