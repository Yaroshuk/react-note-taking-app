import classes from "./GridContainer.module.scss";

const GridContainer = ({children}) => {
  return <section className={classes["grid-container"]}>{children}</section>
}

export default GridContainer;