import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            props.change(e);
          }}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={(e) => {
            props.change(e);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button
          onClick={(e) => {
            props.click(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
