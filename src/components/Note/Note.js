import { COLOR_FILTER } from "../../store/constants";
import { filterClasses } from "../Filter/FilterItem";

import classes from "./Note.module.scss";

const Note = ({ id, text, colorFilter }) => {
  return (
    <div className={classes.note}>
      <div
        className={`${classes["note-filter"]} ${filterClasses[colorFilter]}`}
      />
      <div className={classes["note-content"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
