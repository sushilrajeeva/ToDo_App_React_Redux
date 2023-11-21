import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AddToDo></AddToDo>
      <Todos></Todos>
    </div>
  )
}

export default App
