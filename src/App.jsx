import React from 'react';
import './main.css';
import Header from './components/Header';
import FormArea from './components/FormArea';
import Note from './components/Note';

export default function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || []);
  console.log(notes);
  function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function addNote(note) {
    setNotes(prevNotes => [...prevNotes, note]);
    saveNotes()
  }
  saveNotes()
  function deleteNote(id) {
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter((note, i) => i !== id);
      return newNotes;
    })
  }
  return (
    <main>
      <Header />
      <FormArea creatNote={addNote} />
      <div className="app notes">
        {
          notes.map((note, i) => {
            return <Note
              title={note.title}
              content={note.content}
              key={note.title}
              delNote={() => deleteNote(i)}
            />
          })
        }
      </div>
    </main>
  )
}
