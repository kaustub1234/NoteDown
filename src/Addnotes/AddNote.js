import "./AddNote.css";
import { useState } from "react";

const AddNote = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [date, setDate] = useState("");
  const [enteredNote, setEnteredNote] = useState("");
  const [tag, setTag] = useState('normal');

  const filterHandler = (event) => { 
    setTag(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const titleChangeHandler = (event) => {
    if ((event.target.value).trim().length > 15) {
      return
    }
    else {
      setEnteredTitle(event.target.value);
    }
  };
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setEnteredTitle("NO-TITLE");
      return
    }
    const content = {
      title: enteredTitle,
      Date: new Date(date),
      Note: enteredNote,
      tag: tag
    }

    props.onAddContentHandler(content);
    console.log(content)
    setEnteredNote(" ");
    setEnteredTitle(" ");
    setDate("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
          required />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={date}
          onChange={dateChangeHandler}
          required />
      </div>
      <div className="new-expense__control">
        <label>Note</label>
        <textarea
          id="subject"
          name="subject"
          value={enteredNote}
          onChange={noteChangeHandler}
          placeholder="Write down your note.."></textarea>
      </div>
      <div className="new-expense__control">
        <label>Select a tag </label>
        <select onChange={ filterHandler }>
          <option value='normal'>normal</option>
          <option value='Important'>Important</option>
          <option value='Very Important'>Very Important</option>
        </select>
      </div>
      <button className="new-expense__actions-btn" type="submit">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
