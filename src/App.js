import Navbar from "./Navbar.js";
import Note from "./Addnotes/Note.js";
import { useState } from "react";
import React from "react";

function App() {
  const [listContent, setListContent] = useState([]);

  const DeleteIteamHandler = (goalId) => {
    setListContent((prevGoals) => {
      const updatedList = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedList;
    });
  };

  const addDataHandler = (data) => {
    setListContent((PrevListContent) => {
      let veryImpList = PrevListContent.filter(
        (content) => content.tag === "Very Important"
      );
      let impList = PrevListContent.filter(
        (content) => content.tag === "Important"
      );
      let normal = PrevListContent.filter(
        (content) => content.tag === "normal"
      );
      if (data.tag === "Very Important") {
        return [...veryImpList, data, ...impList, ...normal];
      } else if (data.tag === "Important") {
        return [...veryImpList, ...impList, data, ...normal];
      } else {
        return [...veryImpList, ...impList, ...normal, data];
      }
    });
  };

  let content = <Note onAddData={addDataHandler} notes={listContent}></Note>;

  if (listContent.length > 0) {
    content = (
      <Note
        onAddData={addDataHandler}
        notes={listContent}
        onDeleteItem={DeleteIteamHandler}
      ></Note>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>{content}</div>
    </div>
  );
}

export default App;
