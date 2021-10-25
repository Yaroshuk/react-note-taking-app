import classes from "./NoteForm.module.scss";

const NoteForm = () => {
  return (
    <div className={classes["note-form"]}>
      <form>
        <textarea />
        <div className={classes["note-form-control"]}>

        </div>
      </form>
    </div>
  );
};

export default NoteForm;
