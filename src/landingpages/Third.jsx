import React from 'react'
import { Typography, AppBar, Container, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'transparent',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    marginLeft: '10px',
    marginRight: '10px',
    cursor: 'pointer',
    color: '#ffffffdd',
    fontWeight: 'lighter',
    padding: '10px 25px',
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  navItem: {
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    padding: '10px 25px',
    fontSize: 14,
    fontWeight: 400,
    color: '#ffffffdd',
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '6em',
    backgroundImage: 'linear-gradient(135deg, #41c300, #008b00)'
  },
  sideBar: {
    backgroundColor: '#ffffff2a',
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    position: 'absolute',
    padding: 15,
    right: 0,
    color: '#fff',
  },
  bigText: {
    fontSize: '14rem',
    color: '#fff',
    fontWeight: 900,
    alignSelf: 'center',
    textTransform: 'uppercase',
    flex: 1,
    justifySelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  }
})

const Third = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <div>
              <Typography variant="p" className={classes.menuIcon}>
                <Typography variant="p" style={{fontWeight: 900}}>art</Typography>ichoke</Typography>
            </div>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              Home
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Where to find
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Contact
            </Typography>
            <span style={{flexGrow: 1}}></span>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.sideBar}>
        <MenuIcon />
      </div>
      <div className={classes.background}>
        aaaaaa
        <Typography variant="p" className={classes.bigText}>Greenade!</Typography>
      </div>
    </div>
  )
}

export default Third
