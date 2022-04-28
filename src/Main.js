import React from 'react'
import './Main.css'


function Main({ activeNote , onUpdateNote}) {
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            modified: Date.now()
        })
    }

    if(!activeNote){
        return <div className="no-active-note">No note selected</div>
    }
  
    return (
    <div className='main'>
        <div className='logo'>
            <div className='summa'></div>
            <div className='img-container'>
                <img src={'./noteifylogo.JPG'} height="50" width="50" alt="" />
            </div>
        </div>
        <div className='title-div'>
            <div className='title-dialog'>
                <input type={"text"} id="title" placeholder="Enter topic" autoFocus value={activeNote.title} onChange={(e) => onEditField("title",e.target.value)}></input>
            </div>
            <div className='text-dialog'>
                <textarea id="text" value={activeNote.body} placeholder='Enter your content here...' onChange={(e) => onEditField("body",e.target.value)}></textarea>
            </div>
        </div>
    </div>
  )
}

export default Main