import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
const App = () => {
  return (
    <div className="App">
      <h1>Flags of the World</h1>
      <h3>Can you name the flags of the world? Let us start with Africa! Try to name all 54 Flags !!!</h3>
      <p>Number of Cards: 54</p>
      <Cards/>
    </div>
  )
}
export default App;