import { useState } from "react"
import Header from './Header'
import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import Recipet from './ress'
import './App.css'

function App() {
  const [ingredients, setIngredients] = useState([])

  function addIngredient(newIngredient) {
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <div className="container">
      <Header />
      <IngredientForm addIngredient={addIngredient} />
      <IngredientList ingredients={ingredients} />
      <Recipet ingredients={ingredients} />
    </div>
  )
}

export default App