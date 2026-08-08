const recipesData = [
  {
    id: 1,
    title: "Smoked salmon burger",
    image: "/images/salmon-burger.jpg",
    time: "20 min",
    servings: "6 servings",
    calories: "210 calories",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Tomatoes With Creamy Feta",
    image: "/images/tomatoes-feta.jpg",
    time: "15 min",
    servings: "3 servings",
    calories: "600 calories",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Spicy potato salad",
    image: "/images/potato-salad.jpg",
    time: "30 min",
    servings: "2 servings",
    calories: "320 calories",
    difficulty: "Medium",
  },
  {
    id: 4,
    title: "Chicken Biryani",
    image: "/images/biryani.jpg",
    time: "40 min",
    servings: "4 servings",
    calories: "700 calories",
    difficulty: "Hard",
  },
];

export default function Recipes() {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div className="recipes-container">
      <ul className="recipes-list">
        {recipesData.map((recipe) => (
          <li key={recipe.id} className="recipe-card">
            <article>
              <img src={recipe.image} alt={recipe.title} />

              <h3>{recipe.title}</h3>

              <div className="recipe-meta">
                <span>⏱ {recipe.time}</span>
                <span>🍽 {recipe.servings}</span>
                <span>📊 {recipe.calories}</span>
              </div>

              <div className="difficulty-section">
                <p className="difficulty-title">Difficulty</p>
                <div className="difficulty-badges">
                  {levels.map((level) => (
                    <span
                      key={level}
                      className={`badge ${recipe.difficulty === level ? "active" : ""}`}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
