import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "./evenote.css";
import EditorComponent from "./editor/editor";
import SidebarComponent from "./sidebar/sidebar";
import { doc, updateDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIbOlHxDxLwCic0mTnscmPt0TGAPhd064",
  authDomain: "evernote-clone-practice-1c825.firebaseapp.com",
  projectId: "evernote-clone-practice-1c825",
  storageBucket: "evernote-clone-practice-1c825.appspot.com",
  messagingSenderId: "384985937656",
  appId: "1:384985937656:web:67e4ae27d2c22967c5ed0d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class Evernote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }
  selectNote = (note, index) => {
    console.log("selectNote from main comp");
    console.log(note, index);
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  };
  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      console.log("deleteNote");
    } else {
      console.log("don't deleteNote");
    }
  };
  getNotes = async (db) => {
    //notesSnapshot is method which run when something get updated in firebase
    const notesCol = collection(db, "notes");
    const notesSnapshot = await getDocs(notesCol);
    const notesList = notesSnapshot.docs.map((doc) => doc.data());
    console.log("notesList:-", notesList);
    this.setState({
      notes: notesList,
    });
    // return notesList;
  };
  componentDidMount = () => {
    this.getNotes(db);
  };
  noteUpdate = async (id, noteObj) => {
    // const note = await db.collection("notes").doc(id);

    // const washingtonRef = doc(db, "notes", id);

    // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   body: noteObj.body,
    // });
    const db = app.firestore();

    db.collection("notes")
      .doc(id)
      .set({ ...noteObj });
    console.log("from noteUpdate==> ", id);
  };
  render() {
    const { selectedNoteIndex, notes, selectedNote } = this.state;
    return (
      <div className="app-container">
        <SidebarComponent
          notes={notes}
          selectedNoteIndex={selectedNoteIndex}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {selectedNote ? (
          <EditorComponent
            selectedNote={selectedNote}
            selectedNoteIndex={selectedNoteIndex}
            notes={notes}
            noteUpdate={this.noteUpdate}
          />
        ) : null}
      </div>
    );
  }
}

export default Evernote;
