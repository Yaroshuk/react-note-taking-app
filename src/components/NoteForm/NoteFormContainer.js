import { Fragment } from "react";

import NoteForm from "./NoteForm";

import classes from "./NoteFormContainer.module.scss";

const NoteFormContainer = () => {
  return (
    <Fragment>
      <div className={classes["note-form-background"]} />
      <div className={classes["note-form-container"]}>
        <NoteForm />
      </div>
    </Fragment>
  );
};

export default NoteFormContainer;
