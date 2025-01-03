import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebarItem";

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }
  newNoteBtnClick = () => {
    this.setState({
      addingNote: !this.state.addingNote,
      title: null,
    });
  };
  updateTitle = (txt) => {
    this.setState({
      title: txt,
    });
  };
  newNote = () => {
    console.log(this.state);
  };
  // selectNote = () => {
  //   console.log("selectNote");
  // };
  // deleteNote = (note) => {
  //   if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
  //     console.log("deleteNote");
  //   } else {
  //     console.log("don't deleteNote");
  //   }
  // };
  render() {
    const {
      notes,
      classes,
      selectedNoteIndex,
      selectNote,
      deleteNote,
      newNote,
    } = this.props;
    const { addingNote, title } = this.state;

    return (
      <div className={classes.sidebarContainer}>
        <Button className={classes.newNoteInput} onClick={this.newNoteBtnClick}>
          {addingNote ? "cancel note" : "New Note"}
        </Button>
        {addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter you note bro"
              onKeyUp={(e) => this.updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}
        <List>
          {notes
            ? notes.map((_note, _index) => (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={selectNote}
                    deleteNote={deleteNote}
                  />
                  <Divider />
                </div>
              ))
            : null}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);
