import React from "react";
import "./Counter.css";
import { Context } from "../Provider";

function Counter(){

    const{
        tareasCompleted: completed,
        tareasTotal: total,
    } = React.useContext(Context)

    return (
        <h1>
            Has completado {completed} de {total}
        </h1>
    );
}

export default Counter;