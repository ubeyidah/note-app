import React from 'react';
import { Paper } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import NotesIcon from '@mui/icons-material/Notes';

function Header() {
  const styles = {
    mainHeader: {
      background: 'rgb(0, 132, 255)',
      color: 'white'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      height: '60px',
      justifyContent: "space-between",
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '20px',
      display: "flex",
      alignItems: "center",
      gap: '10px'
    },
    link: {
      color: 'white'
    }
  }

  return (
    <Paper square elevation={2} style={styles.mainHeader}>
      <div className="app" style={styles.content}>
        <div style={styles.logo}>
          <NotesIcon />
          <span>Note App</span>
        </div>
        <div>
          <a style={styles.link} href="https://github.com/ubeyidah" target='_blank'><GitHub /></a>
        </div>
      </div>
    </Paper>
  )
}

export default Header;