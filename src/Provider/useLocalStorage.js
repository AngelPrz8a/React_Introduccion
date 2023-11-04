import React from "react";

function useLocalStorage(itemName, initialValue) {

  //localStorage.removeItem("Tareas_V1")
  
  const [itemsList, setItemsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageAll = localStorage.getItem(itemName)
        let parseTareas;
        console.log(localStorageAll)
    
        if(localStorageAll === []){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseTareas = initialValue
          //console.log("paso aqui")
        }else{
          parseTareas = JSON.parse(localStorageAll)
          setItemsList(parseTareas)
          //console.log("otro lado")
        }
    
        setLoading(false)
      }catch(error){
        setLoading(false)
        setError(true)
      }
    },2000)
  },[]);

    const saveLocalStorage = (actualizedList) => {
      setItemsList(actualizedList);
      let tasksListString = JSON.stringify(actualizedList);
      localStorage.setItem(itemName, tasksListString);
    };
  
    return {
      itemsList, 
      saveLocalStorage,
      loading,
      error
    };
  }

export default useLocalStorage;