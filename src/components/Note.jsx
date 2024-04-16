import React from 'react';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  const styles = {
    card: {
      minWidth: '200px',
      minHeight: '100px',
      padding: '15px',
      margin: "15px 0",
      display: 'flex',
      justifyContent: 'space-between',

    }
  }
  return (
    <Card style={styles.card} variant="outlined">
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <Button style={{ marginLeft: "120px", color: 'darkred' }} onClick={props.delNote}><DeleteIcon /></Button>
    </Card>
  )
}

export default Note