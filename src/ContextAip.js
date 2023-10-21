import { useState,useContext,useEffect,createContext } from "react";

const dummyContext=createContext();

function useValue(){
    const value=useContext(dummyContext);
    return value;
}



 function ContextApi({children}){
    const [seaerch,setSearch]=useState("egg")
    const [recipes,setResipes]=useState("");

    useEffect(()=>{
            fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${seaerch}`)
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
