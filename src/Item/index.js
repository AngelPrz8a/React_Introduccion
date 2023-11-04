import "./Item.css";

function Item(props){
    return (
        <li className="li">
            <input type="radio"
            onClick={props.onComplete}
            checked={props.completed ? true : false}
            />
            <p>{props.text}</p>
            <span
            onClick={props.onDelete}>X</span>
        </li>
    );
}

export default Item;