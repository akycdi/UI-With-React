import React from 'react'
import { Typography, AppBar, Container, Toolbar, IconButton, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingBagOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    backgroundColor: '#e2e2e2',
  },
  appBar: {
    backgroundColor: '#f2f2f2ac',
    backdropFilter: 'blur(6px)',
    height: '60px',
    width: '90%',
    display: 'flex',
    top: 30,
    alignItems: 'center',
    borderRadius: 15,
    padding: '0px 20px',
  },
  mainLogo: {
    marginLeft: '10px',
    marginRight: '10px',
    cursor: 'pointer',
    color: '#E4B753',
    fontWeight: 500,
    padding: '10px 25px',
    fontSize: 22,
  },
  navItem: {
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    padding: '10px 25px',
    fontSize: 16,
    fontWeight: 600,
    color: '#464646',
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'fixed',
    top: -200,
    right: -200,
    height: '700px',
    width: '700px',
    backgroundColor: '#333333',
    borderRadius: "10000px",
  },
  mainContent: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: "9rem 6rem",
  },
  mainText: {
    fontSize: 68,
    fontWeight: 600,
    width: '100%',
    color: '#444444',
    lineHeight: 1,
  },
  subText: {
    fontSize: 22,
    width: '100%',
    color: '#727272',
    padding: '30px 0px',
    lineHeight: 1.5,
  },
  orderButton: {
    backgroundColor: '#141414',
    color: '#e2e2e2',
    padding: "14px 36px",
    borderRadius: 30,
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '.3s all',
    border: '1px solid #141414',
    boxShadow: '1px 2px 18px #7272729d',
  },
  bottomItems: {
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    paddingRight: 20,
    paddingTop: 30,
  },
  bottomText: {
    fontWeight: 500,
    fontSize: 24,
    color: '#444444',
  },
  bottomSubText: {
    fontSize: 16,
    color: '#646464',
    paddingTop: 10,
    lineHeight: 1.3,
  }
})
const Fifth = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none', justifyContent: 'center', display: 'flex', width: '100%'}} position="absolute">
        <Container maxWidth="xl" style={{backgroundColor: 'transparent', boxShadow: 'none', justifyContent: 'center', display: 'flex', width: '100%'}}>
          <Toolbar className={classes.appBar} disableGutters>
            <IconButton className={classes.menuIcon}>
              <MenuIcon />
            </IconButton>
            <Typography variant="p" className={classes.mainLogo}>Micro</Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              Home
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Shop
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Accessories
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Support
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Blog
            </Typography>
            <IconButton>
              <ShoppingBagOutlined style={{padding: 2}} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.background}></div>
      <Grid container spacing={0}>  
        <Grid item xs={7}>
          <div className={classes.mainContent}>
            <Typography variant="p" className={classes.mainText}>
              Modern sound. Inside vintage body.
            </Typography>
            <Typography variant="p" className={classes.subText}>
              Best microphone for recording, podcasting, gaming, streaming, YouTube, and more.
            </Typography>
            <div className={classes.orderButton}>
              <Typography variant="p" className={classes.buttonText}>Add to cart</Typography>
            </div>
            <Grid container spacing={3} style={{marginTop: 20}}>
              <Grid item xs={5}>
                <div className={classes.bottomItems}>
                  <Typography variant="p" className={classes.bottomText}>Cardioid Mode</Typography>
                  <Typography variant="p" className={classes.bottomSubText}>
                    Perfect for podcasting, Twitch streaming, music recording, voice overs and instruments.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className={classes.bottomItems}>
                  <Typography variant="p" className={classes.bottomText}>Stereo Mode</Typography>
                  <Typography variant="p" className={classes.bottomSubText}>
                    Uses both the left and right channels to capture a wide, realistic sound image.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
         </Grid>
      </Grid>
    </div>
  )
}

export default Fifth
