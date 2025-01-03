import React from "react";
import ReactQuill from "react-quill";
import { debounce } from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }
  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = (prevProps) => {
    // console.log("prevProps==", prevProps);
    if (prevProps.selectedNote.body !== this.props.selectedNote.body) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
      id: this.state.id,
    });
  }, 3000);
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  render() {
    const { classes } = this.props; //this is for styling purpose check styles.js for evey component
    const { text, title, id } = this.state;
    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={text} onChange={this.updateBody} />
      </div>
    );
  }
}

export default withStyles(styles)(EditorComponent);
