
import Counter from "../Counter";
import Search from "../Search";
import List from "../List";
import Item from "../Item";
import Button from "../Button";
import { Context } from "../Provider";
import React from "react";
import { Modal } from "../Modal";
import {Form} from "../Form"

function AppReturn(){
  const {
    loading,
    error,
    searchTarea,
    completeTarea,
    deleteTarea,
    openModal,
    setOpenModal
  } = React.useContext(Context)
    return(
<>
      <Counter />
      <Search/>

      <List>
      {loading  && <p>Cargando ...</p>}
      {error && <p>Hubo un error</p>}
      {(!loading && searchTarea.length === 0) && <p>Cree una nueva tarea</p>}
      {(!loading && searchTarea.length > 0) && searchTarea.map(item=>(
        <Item 
          key={item.text} 
          text={item.text} 
          completed={item.completed}
          onComplete={()=>completeTarea(item.text)}
          onDelete={()=>deleteTarea(item.text)}
        />
      ))}
      </List>
        
      <Button
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
         {<Form />}
        </Modal>
      )}
    </>
    )
}

export default AppReturn;