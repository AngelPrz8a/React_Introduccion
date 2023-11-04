import React, { Children } from "react"
import useLocalStorage from "./useLocalStorage";

const Context = React.createContext()

const items=[
    {text:"tarea 1",completed:false},
    {text:"tarea 2",completed:false},
    {text:"tarea 3",completed:false},
    {text:"tarea 4",completed:false},
  ];

function Provider({children}){

  const {
    itemsList: tareas, 
    saveLocalStorage: setTareas,
    loading,
    error
  }
    = useLocalStorage("Tareas_V1",items);


  const tareasCompleted = tareas.filter(
    todo => todo.completed
  ).length;

  const tareasTotal = tareas.length;

  const [searchValue, setValue] = React.useState(""); 
  const [openModal, setOpenModal] = React.useState(true); 

  const searchTarea = tareas.filter(
    (tarea) => {
      const text = tarea.text.toLowerCase();
      const search = searchValue.toLowerCase();
      return text.includes(search);
    }
  );

  const saveTareas =(news)=>{  
    localStorage.setItem("Tareas_V1", JSON.stringify(news))
    setTareas(news)
  }

  const completeTarea = (text)=>{
    const newTareas = [...tareas];
    const index = newTareas.findIndex(
      (tarea)=> tarea.text === text
    )
    newTareas[index].completed="true";
    saveTareas(newTareas) 
  };

  const deleteTarea = (text)=>{
    const newTareas = [...tareas];
    const index = newTareas.findIndex(
      (tarea)=> tarea.text === text
    )
    newTareas.splice(index,1);
    saveTareas(newTareas) 
  };

  const add=(text)=>{
    const newTareas = [...tareas];
    newTareas.push({
      text,
      completed:false
    })
    saveTareas(newTareas)
  }

  return (
    <Context.Provider value={{
        loading,
        error,
        tareasCompleted,
        tareasTotal,
        searchValue,
        setValue,
        searchTarea,
        completeTarea,
        deleteTarea,
        openModal,
        setOpenModal,
        add
    }}>
        {children}
    </Context.Provider>
  )
}

export {Context, Provider}