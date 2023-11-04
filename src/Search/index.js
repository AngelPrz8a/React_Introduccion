import React from "react";
import "./Search.css";
import { Context } from "../Provider";

function Search(){
    const {
        searchValue,
        setValue
    } = React.useContext(Context)
    return (
        <input 
        className="input_search"
        placeholder="Tarea" 
        value={searchValue}
        onChange={(event)=>{
            setValue(event.target.value)
        }}
        />
    );
}

export default Search;