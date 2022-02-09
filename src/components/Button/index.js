//BUTTON COMPONENT

//IMPORTING
import './styles.scss';

//BUTTON
const Button = (props) => {
    return(
        <a href={props.href} className="button button__header">{props.children}</a> 
    );
}

export default Button;
