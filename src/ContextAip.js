import { useState,useContext,useEffect,createContext } from "react";

const dummyContext=createContext();

function useValue(){
    const value=useContext(dummyContext);
    return value;
}



 function ContextApi({children}){
    const [seaerch,setSearch]=useState("chicken")
    const [recipes,setResipes]=useState("");

    useEffect(()=>{
            fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${seaerch}&apiKey=43303235e69c4007a1862ef2a30b517a`)
            .then(res=>res.json())
            .then((json)=>{
                console.log(json)
                setResipes(json);
            })
    },[])
    return(
        <dummyContext.Provider value={{recipes}}>
            {children}
                    </dummyContext.Provider>
    )
}
export {useValue};
export default ContextApi;
