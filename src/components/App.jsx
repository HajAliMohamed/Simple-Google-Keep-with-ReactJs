import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevValue) => {
      return {
        ...inputValue,
        [name]: value
      };
    });
  }

  const [notes, setNotes] = useState([]);
  function handleClick(e) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputValue];
    });
    setInputValue({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        change={handleChange}
        click={handleClick}
        title={inputValue.title}
        content={inputValue.content}
      />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            click={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
