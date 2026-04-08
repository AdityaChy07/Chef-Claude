import axios from "axios"
import { useState } from "react"

export default function Recipet({ ingredients }) {
  const [recipe, setRecipe] = useState("")
  const [loading, setLoading] = useState(false)

  async function generateRecipe() {
    if (ingredients.length === 0) {
      setRecipe("Please add ingredients first.")
      return
    }

    try {
      setLoading(true)

      const response = await axios.post(
        "https://router.huggingface.co/v1/chat/completions",
        {
          model: "meta-llama/Meta-Llama-3-8B-Instruct",
          messages: [
            {
              role: "user",
              content: `Create a detailed cooking recipe using:
${ingredients.join(", ")}

Include preparation steps and cooking tips.`,
            },
          ],
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )

      setRecipe(
        response.data?.choices?.[0]?.message?.content ??
          "No recipe generated."
      )
    } catch (error) {
      console.log("HF ERROR =", error.response?.data || error.message)
      setRecipe("⚠️ HuggingFace API Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={generateRecipe}>
        {loading ? "Generating..." : "Generate Recipe"}
      </button>

      <br /><br />

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {recipe}
      </pre>
    </div>
  )
}