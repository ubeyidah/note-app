import React from 'react';
import Card from '@mui/material/Card';
import { Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function Note(props) {
  const styles = {
    card: {
      minWidth: '200px',
      minHeight: '100px',
      padding: '15px',
      margin: "15px 0",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: "center"
    },
    left: {
      display: "flex",
      gap: "20px",
      alignItems: "center"
    }
  }
  return (
    <Card style={styles.card} variant="outlined">
      <div style={styles.left}>
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
      <Tooltip title="Delete">
        <Button style={{ marginLeft: "120px", color: 'darkred' }} onClick={props.delNote}><DeleteIcon /></Button>
      </Tooltip>
    </Card>
  )
}

export default Note;