function IngredientList({ ingredients }) {
  return (
    <div className="ingredients">
      <h2>Ingredients on hand:</h2>
      <ol className="Aa">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default IngredientList