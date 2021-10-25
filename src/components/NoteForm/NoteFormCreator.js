import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { noteFormActions } from "../../store/actions";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteFormContainer from "./NoteFormContainer";
import Button from "../UI/Button";

import classes from "./NoteFormCreator.module.scss";
import { Fragment } from "react";

const NoteFormCreator = () => {
  const formIsOpen = useSelector((state) => state.noteForm.isOpen);
  const dispatch = useDispatch();

  const openNoteForm = () => {
    dispatch(noteFormActions.openNoteForm());
  };

  //TODO: need note-form-creator conmonent???
  return (
    <Fragment>
      <div className={classes["note-form-creator"]}>
        <Button title="Add" icon={faPlus} onClick={openNoteForm} />
      </div>
      {formIsOpen &&
        createPortal(
          <NoteFormContainer />,
          document.getElementById("note-form-root")
        )}
    </Fragment>
  );
};

export default NoteFormCreator;
