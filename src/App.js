import {useState} from "react";
import uuid from "react-uuid";

import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import React from 'react';

function App() {
  let today = new Date()
  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);

  

  const onAddNote = () =>{
    console.log("btn pressed")
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      modified: today.toLocaleDateString() + ":"+ today.getHours() + ":" + today.getMinutes(),
    };

    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (idToDelete) => {
      setNotes(notes.filter((note) => note.id!==idToDelete))
  }

  const retActiveNote = () => {
    return notes.find((note)=> note.id===activeNote)
  } 
  if(retActiveNote()===undefined){
    console.log("undefined error")
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id===activeNote){
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  }

  return (
    <div className="App">
        <Sidebar 
        notes={notes} 
        onAddNote = {onAddNote} 
        onDeleteNote = {onDeleteNote}
        activeNote = {activeNote}
        setActiveNote = {setActiveNote}/>


        <Main  activeNote={retActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;
