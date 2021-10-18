import classes from "./HeaderCard.module.scss";

const HeaderCard = ({ children }) => {
  return <div className={classes["header-card"]}>{children}</div>
};

export default HeaderCard;
