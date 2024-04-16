import React, { useState } from 'react';
import { Fab, Paper, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function FormArea({ creatNote }) {
  const styles = {
    container: {
      margin: "10px 0",
      padding: "25px 50px",
    },
    inputs: {
      marginTop: '16px'
    },
    title: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    btn: {
      marginTop: "15px"
    }
  }
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitForm() {
    if (!note.title || !note.content) {
      return
    }
    creatNote(note)
    setNote({
      title: "",
      content: "",
    })
  }
  return (
    <div className="app">
      <Paper style={styles.container} >
        <form>
          <Typography style={styles.title}>Add New Note</Typography>
          <TextField
            label="Title"
            fullWidth
            autoComplete='off'
            style={styles.inputs}
            onChange={handleChange}
            name="title"
            value={note.title}
          />
          <TextField
            label="Content"
            fullWidth
            autoComplete='off'
            multiline
            rows={3}
            style={styles.inputs}
            onChange={handleChange}
            name="content"
            value={note.content}
          />
          <Tooltip title="Add Note">
            <Fab style={styles.btn} onClick={submitForm}><AddIcon /></Fab>
          </Tooltip>
        </form>
      </Paper>
    </div>
  )
}
