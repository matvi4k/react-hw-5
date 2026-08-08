const baseUrl = import.meta.env.BASE_URL;

const recipesData = [
  {
    id: 1,
    image: `${baseUrl}images/Smoked-Salmon-Caviar-Burger.jpg`,
    title: "Smoked salmon burger",
    time: 20,
    servings: 6,
    calories: 210,
    difficulty: "Easy",
  },
  {
    id: 2,
    image: `${baseUrl}images/tomatoes.webp`,
    title: "Tomatoes With Creamy Feta",
    time: 15,
    servings: 3,
    calories: 600,
    difficulty: "Easy",
  },
  {
    id: 3,
    image: `${baseUrl}images/potato-salad.jpg`,
    title: "Spicy potato salad",
    time: 30,
    servings: 2,
    calories: 320,
    difficulty: "Medium",
  },
  {
    id: 4,
    image: `${baseUrl}images/chicken-biryani-recipe.jpg`,
    title: "Chicken Biryani",
    time: 40,
    servings: 4,
    calories: 700,
    difficulty: "Hard",
  },
];

export default function Recipes() {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div>
      <ul>
        {recipesData.map((recipe) => (
          <li key={recipe.id}>
            <article>
              <img src={recipe.image} alt={recipe.title} />

              <h3>{recipe.title}</h3>

              <div className="settings">
                <span>⏱ {recipe.time} min</span>
                <span>🍽 {recipe.servings} servings</span>
                <span>📊 {recipe.calories} calories</span>
              </div>

              <div className="difficulty">
                <p className="difficultyP">Difficulty</p>

                <div className="difficultyLevel">
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
