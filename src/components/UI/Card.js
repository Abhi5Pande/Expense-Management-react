import './Card.css';
function Card(props){
    const att = "card " + props.className ;
    return (<div className = {att}> {props.children} </div>);
}
export default Card;