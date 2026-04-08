import { useState } from "react"

function IngredientForm({ addIngredient }) {
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!input.trim()) return

    addIngredient(input.trim())
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="e.g. oregano"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">+ Add ingredient</button>
    </form>
  )
}

export default IngredientForm