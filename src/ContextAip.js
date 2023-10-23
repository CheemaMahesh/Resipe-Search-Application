import { useState,useContext,useEffect,createContext } from "react";

const dummyContext=createContext();

function useValue(){
    const value=useContext(dummyContext);
    return value;
}



 function ContextApi({children}){
    const [seaerch,setSearch]=useState("chicken")
    const [recipes,setResipes]=useState("");
    const [trending,setTrending]=useState("");
    const [meat,setMeat]=useState([]);
    const [name,setName]=useState("Egg Plant Curry");
    const [id,setId]=useState(2);
    const [recipeD,setResipeD]=useState("");
    const [favorites,setFavorites]=useState([]);

    //handle favorites
    const handleFavorites=()=>{
        
    }

    //handle Page-Name and Id
    const handlePageName=(n,i)=>{
            setName(n);
            setId(i)
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`)
        .then(res=>res.json())
        .then((json)=>{
            setResipeD(json);
            // console.log(json,"benchod")
        })
    }


    //to handle the searched results
    const handleSearch=(ss)=>{
        setSearch(ss);
        console.log(ss);
    }

    //Handling the Trending Resipes
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=salad')
        .then(res=>res.json())
        .then((json)=>{
            setTrending(json);
        })
    },[])

    //handlign meat-Page Recipes
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=meat')
        .then(res=>res.json())
        .then((json)=>{
         const jj=json.meals.slice(0,4);
         setMeat(jj);
         console.log(jj)

        })
    },[])


     //handlign Home-Page Recipes
     useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${seaerch}`)
        .then(res=>res.json())
        .then((json)=>{
           
         setResipes(json);

        })
    },[seaerch])


    //6389122dde47435896fae926cf3a1f28
    // useEffect(()=>{
    //         fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${seaerch}&apiKey=43303235e69c4007a1862ef2a30b517a`)
    //         .then(res=>res.json())
    //         .then((json)=>{
    //             console.log(json)
    //             setResipes(json);
    //         })
    // },[seaerch])


    //   useEffect(()=>{
    //         fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${seaerch}&apiKey=6389122dde47435896fae926cf3a1f28`)
    //         .then(res=>res.json())
    //         .then((json)=>{
    //             console.log(json)
    //             setResipes(json);
    //         })
    // },[seaerch])

    
    return(
        <dummyContext.Provider value={{
            recipes,
            handleSearch,
            trending,
            meat,
            name,
            id,
            handlePageName,
            recipeD
            
            }}>
            {children}
                    </dummyContext.Provider>
    )
}
export {useValue};
export default ContextApi;
