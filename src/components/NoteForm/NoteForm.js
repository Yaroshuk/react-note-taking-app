import Button from "../UI/Button";

import classes from "./NoteForm.module.scss";

const NoteForm = () => {
  return (
    <div className={classes["note-form"]}>
      <form>
        <textarea />
        <div className={classes["note-form-control"]}>
          <Button title="cancel" action="cancel" />
          <Button title="save" type="sybmit" />
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
