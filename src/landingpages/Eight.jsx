import React from 'react';
import { Typography, AppBar, Container, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#E5D9CF'
  },
  appBar: {
    backgroundColor: 'transparent',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#957F72',
    padding: '0px 7%'
  },
  navItem: {
    margin: "0px 4px",
    cursor: 'pointer',
    padding: '10px 15px',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'Raleway', sans-serif"
  },
  content: {
    width: '100%',
    height: '100vh',
    padding: '50px 7%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5D9CF'
  },
  photograph: {
    fontSize: '2rem', 
    fontWeight: 500, 
    color: '#957F72', 
    fontFamily: "'Cormorant', serif", 
    display: 'inline-block',
  },
  pName: {
    fontSize: '3.2rem', 
    color: '#4C4037', 
    fontFamily: "'Cormorant', serif", 
    padding: "15px 60px"
  },
  mainImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    border: '14px solid #E5D9CF',
    marginTop: 60,
    zIndex: 1,
  },
  imgTwo: {
    width: '550px',
    height: '400px',
    objectFit: 'cover',
    // position: 'absolute',
    right: '120px',
    zIndex: 0
  },
  learnMore: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '20px 60px',
  },
  learn: {
    fontSize: '1rem', 
    color: '#957F72', 
    fontFamily: "'Raleway', sans-serif",
    position: 'relative',
    "&:before": {
      content: '""',
      position: 'absolute',
      left: '-20px',
      width: '40px',
      height: '40px',
      top: '-10px',
      border: '1.5px solid #957F72',
      borderRadius: '50%',
      transformOrigin: 'bottom right',
    }
  }
});

const Eight = () => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <Typography variant="p" style={{fontWeight: 700, color: '#4C4037', fontSize: 24, fontFamily: "'Cormorant', serif"}}>MR</Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              About me
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Portfolio
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Advantages
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Process
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Services
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Contacts
            </Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              +7(903) 553-47-37
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.content}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="p" className={classes.photograph}>Photography</Typography>
          <Typography variant="p" className={classes.pName}>MARY <br />RASTISLAVSKAYA</Typography>
          <div className={classes.learnMore}>
            <Typography variant="p" className={classes.learn}>Learn More</Typography>
            <ArrowForward style={{color: '#957F72', marginLeft: 16, fontSize: 16}} />
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <img src="https://images.unsplash.com/photo-1608883839291-d045bb16365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className={classes.mainImg} />
          <img src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80" alt="" className={classes.imgTwo} />
        </div>
      </div>
      <div className={classes.content} style={{flexDirection: 'column', }}>
        <Typography variant="p" className={classes.photograph}>About Me</Typography>
        <div style={{display: 'flex', width: '100%'}}>
        <div style={{display: 'flex'}}>
          <img src="https://images.unsplash.com/photo-1608883839291-d045bb16365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className={classes.mainImg} />
          <img src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80" alt="" className={classes.imgTwo} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="p" className={classes.photograph}>Photography</Typography>
          <Typography variant="p" className={classes.pName}>MARY <br />RASTISLAVSKAYA</Typography>
          <div className={classes.learnMore}>
            <Typography variant="p" className={classes.learn}>Learn More</Typography>
            <ArrowForward style={{color: '#957F72', marginLeft: 16, fontSize: 16}} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
