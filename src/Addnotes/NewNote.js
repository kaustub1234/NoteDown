import "../Addnotes/NewNote.css";
import styled from "styled-components";

const NewNote = (props) => {
  const StyledSpan = styled.span`
    border-radius: 10px;
    background-color: ${(props) => {
      if (props.Tags === "Very Important") {
        return "yellow";
      } else if (props.Tags === "Important") {
        return "orange";
      } else {
        return "red";
      }
    }};
    padding: 5px;
    border: solid black;
  `;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const deleteContent = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="card">
      <div className="card-head">
        <b>{props.title}&nbsp;</b>
        <div className="card-head__date">
          &nbsp;{day + "-" + month + "-" + year}&nbsp;
        </div>
        <StyledSpan Tags={props.tag}>
          <div>{props.tag}</div>
        </StyledSpan>
        &nbsp;
        <input
          type="button"
          onClick={deleteContent}
          className="card-head__delete"
          value="Delete"
        />
        &nbsp;
      </div>
      <div className=" card-content">{props.note}</div>
    </div>
  );
};

export default NewNote;
