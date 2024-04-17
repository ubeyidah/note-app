import React from 'react';
import './main.css';
import Header from './components/Header';
import FormArea from './components/FormArea';
import Note from './components/Note';

export default function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || []);

  function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function addNote(note) {
    setNotes(prevNotes => [...prevNotes, note]);
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter((note) => note.todoId !== id);
      return newNotes;
    })
  }
  saveNotes()
  return (
    <main>
      <Header />
      <FormArea creatNote={addNote} />
      <div className="app notes">
        {
          notes.map((note) => {
            return <Note
              title={note.title}
              content={note.content}
              key={note.todoId}
              delNote={() => deleteNote(note.todoId)}
            />
          })
        }
      </div>
    </main>
  )
}
