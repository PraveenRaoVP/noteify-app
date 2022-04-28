import React from 'react';
import './Sidebar.css';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
  return (
    <div className='sidebar'>
        <div className='sidebar--header'>
            <div className='sidebar-heading'>
                <h1>NOTEIFY - NOTE TAKING APP</h1>
                <button onClick={onAddNote}>
                <IconButton>
                    <AddIcon fontSize="large" />
                </IconButton>
                </button>
            </div>
        </div>
        <div className='sidebar--notes-menu'>
            {notes.map((note) => (
                <div className={`sidebar--notes ${note.id===activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    <IconButton className="delete-btn">
                    <button onClick={() =>  onDeleteNote(note.id)}>
                        <DeleteIcon />
                    </button>
                    </IconButton>
                    <h2>{note.title}</h2>
                    <h1>{note.body && note.body.substr(0,100) + "..."}</h1>
                    <p className="date-modified">Last modified: {note.modified}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Sidebar