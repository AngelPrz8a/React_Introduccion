import React from "react"
import { Context } from "../Provider"

function Form(){

    const [newValue, setNuewValue]=React.useState("")

    const {
        add,
        setOpenModal
    } = React.useContext(Context)

    const onSubmit =(event)=>{
        add(newValue)
        event.preventDefault()
        setOpenModal(false)
    }

    const onCancel =(event)=>{
        setOpenModal(false)
    }

    const onChange =(event)=>{
        setNuewValue(event.target.value)
    }

    return(
    <form onSubmit={onSubmit}>
        <input 
        onChange={onChange}
        type="text"/>

        <button
        type="button"
        onClick={onCancel}
        >Cancelar</button>

        <button
        type="submit"
        >Agregar</button>
    </form>
    )
}

export {Form}