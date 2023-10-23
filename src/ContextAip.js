import { useState, useContext, useEffect, createContext } from "react";

const dummyContext = createContext();

function useValue() {
  const value = useContext(dummyContext);
  return value;
}

function ContextApi({ children }) {
  const [seaerch, setSearch] = useState("chicken");
  const [recipes, setResipes] = useState("");
  const [trending, setTrending] = useState("");
  const [meat, setMeat] = useState([]);
  const [name, setName] = useState("Egg Plant Curry");
  const [id, setId] = useState(2);
  const [recipeD, setResipeD] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favItems, setFavitems] = useState([]);

  // Handle favorites
  const handleFavorites = (name) => {
    // Check if the name is already in favorites
    if (!favorites.includes(name)) {
      setFavorites([...favorites, name]);
      console.log("Favorites: ", favItems);
    }
  }

  // Handle Fav Render
  const handleFavRender = () => {
    const favItems = [];

    favorites.forEach((favName) => {
      const matchingRecipe = recipes.meals.find(
        (recipe) => recipe.strMeal === favName
      );

      if (matchingRecipe) {
        favItems.push(matchingRecipe);
      }
    });

    setFavitems(favItems);
    console.log("Fav items ", favItems);
  };

  useEffect(() => {
    // Call the handleFavRender function inside the useEffect
    handleFavRender();

    // Rest of your useEffect code here
  },[favorites, recipes]);

  // Handle Page-Name and Id
  const handlePageName = (n, i) => {
    setName(n);
    setId(i);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`)
      .then((res) => res.json())
      .then((json) => {
        setResipeD(json);
      });
  }

  // To handle the searched results
  const handleSearch = (ss) => {
    setSearch(ss);
  }

  // Handling the Trending Recipes
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=salad')
      .then((res) => res.json())
      .then((json) => {
        setTrending(json);
      });
  }, []);

  // Handling meat-Page Recipes
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=meat')
      .then((res) => res.json())
      .then((json) => {
        const jj = json.meals.slice(0, 4);
        setMeat(jj);
      });
  }, []);

  // Handling Home-Page Recipes
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${seaerch}`)
      .then((res) => res.json())
      .then((json) => {
        setResipes(json);
      });
  }, [seaerch]);

  return (
    <dummyContext.Provider value={{
      recipes,
      handleSearch,
      trending,
      meat,
      name,
      id,
      handlePageName,
      recipeD,
      handleFavorites,
      favItems
    }}>
      {children}
    </dummyContext.Provider>
  )
}

export { useValue };
export default ContextApi;
