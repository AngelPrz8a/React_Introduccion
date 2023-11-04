import "./Button.css";

function Button({
    setOpenModal
}){
    return (
        <button className="CreateButton"
        onClick={()=>{
            setOpenModal(state=>!state)
        }}
        >+</button>
    );
}

export default Button;