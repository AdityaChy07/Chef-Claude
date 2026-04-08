function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe