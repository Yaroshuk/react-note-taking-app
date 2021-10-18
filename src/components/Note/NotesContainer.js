import { useSelector } from "react-redux";
import GridContainer from "../UI/GridContainer";
import GridCard from "../UI/GridCard";
import Note from "./Note";

import classes from "./NotesContainer.module.scss";

const DUMMY_NOTES = [
  {
    id: "n0",
    text: "It's my first note AWESOME!!!",
  },
  {
    id: "n1",
    text: "nullAd tempor ea velit duis ullamco reprehenderit laboris.",
  },
  {
    id: "n2",
    text: "Anim amet ad culpa esse elit consectetur laboris anim do irure sit. Sit quis ad exercitation enim nulla aliquip amet nulla. Laborum in nisi est quis excepteur consequat.",
  },
];

const NotesContainer = () => {
  const notes = useSelector(state => state.notes)

  console.log(notes);

  return (
    <section className={classes["notes-container"]}>
      <GridContainer>
        {notes.map((note) => {
          return (
            <GridCard key={note.id}>
              <Note id={note.id} text={note.text} colorFilter={note.colorFilter}/>
            </GridCard>
          );
        })}
      </GridContainer>
    </section>
  );
};

export default NotesContainer;
