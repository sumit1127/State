import { useState } from "react";

const Add = () => {
  const [ingredients, setIngredients] = useState(["jbxjxb"]);

  const ingredientsListItems = ingredients.map((x, i) => <li key={i}>{x}</li>);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="Add Something"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Add;
