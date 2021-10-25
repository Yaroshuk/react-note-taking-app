import classes from "./Button.module.scss";

const Button = ({ type = "button", title, onClick = () => {}, action = "confirm" }) => {
  const className = `${classes.button} ${
    action === "cancel" && classes["cancel-button"]
  }`;

  const onClickHandler = (event) => {
    event.preventDefault();

    onClick();
  }

  return (
    <button type={type} onClick={onClickHandler} className={className}>
      {title}
    </button>
  );
};

export default Button;
