import NewNote from "./NewNote";
import AddNote from "./AddNote";
import "../Addnotes/Note.css";
const Note = (props) => {
  const addContentHandler = (Data) => {
    const content = {
      ...Data,
      id: Math.random().toString(),
    };

    props.onAddData(content);
  };

  let element = props.notes.map((notes) => (
    <NewNote
      key={notes.id}
      id={notes.id}
      tag={notes.tag}
      title={notes.title}
      date={notes.Date}
      note={notes.Note}
      // tag={notes.tag}
      onDelete={props.onDeleteItem}
    ></NewNote>
  ));

  if (props.notes == 0) {
    element = (<h1 style={{ textAlign: "center", font: "bolder" }}>Nothing added as a note.. may be add one..!</h1>);
  }

  return (
    <div>
      <AddNote onAddContentHandler={addContentHandler} />
      <div className="contain">
        {element}
      </div>
    </div>
  );
};

export default Note;
