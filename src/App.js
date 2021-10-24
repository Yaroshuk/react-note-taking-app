import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import NoteFormContainer from './components/NoteForm/NoteFormContainer';

function App() {
  return <Fragment>
    <Header />
    <Main />
    {createPortal(<NoteFormContainer />, document.getElementById("note-form-root"))}
  </Fragment>
}

export default App;
