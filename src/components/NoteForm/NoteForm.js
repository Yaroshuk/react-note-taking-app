import Button from "../UI/Button";
import FilterContainer from "../Filter/FilterContainer";

import { filterClasses } from "../Filter/FilterItem";
import { COLOR_FILTER } from "../../store/constants";

import classes from "./NoteForm.module.scss";

const TEXTAREA_PLACEHOLDER = "Note contetnt...";

const NoteForm = () => {
  return (
    <div className={classes["note-form"]}>
      <div className={`${classes["note-filter"]} ${filterClasses[COLOR_FILTER.none]}`}/>
      <form>
        <textarea autoFocus placeholder={TEXTAREA_PLACEHOLDER} />
        <div className={classes["note-form-filter"]}>
          <FilterContainer />
        </div>
        <div className={classes["note-form-control"]}>
          <Button title="cancel" action="cancel" />
          <Button title="save" type="sybmit" />
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
