import NoteForm from "./NoteForm";

import classes from "./NoteFormContainer.module.scss";

const NoteFormContainer = () => {
  return (
    <div className={classes["note-form-container"]}>
      <div className={classes["container-background"]}>
        <NoteForm />
      </div>
    </div>
  );
};

export default NoteFormContainer;
