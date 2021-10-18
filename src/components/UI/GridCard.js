import classes from "./GridCard.module.scss";

const GridCard = ({ children }) => {
  return <div className={classes["gird-card"]}>{children}</div>;
};

export default GridCard;
