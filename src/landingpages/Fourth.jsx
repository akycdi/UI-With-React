import React from 'react'
import { Typography, AppBar, Container, Toolbar, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { FacebookOutlined, Instagram, ShoppingCartOutlined, Twitter } from '@mui/icons-material';
import Burger from '../assets/Burger.png'

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
  mainLogo: {
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
  fixedBackground: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    zIndex: 0
    // padding: '6em',
  },
  left: {
    width: '50%',
    height: '100vh',
    backgroundColor: '#040404'
  },
  right: {
    width: '50%',
    height: '100vh',
    backgroundColor: 'orange'
  },
  tag: {
    position: 'absolute',
    right: "9rem",
    top: "11rem",
    backgroundColor: '#fff',
    color: 'white',
    borderRadius: 50, 
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    boxShadow: '4px 4px 20px #00000040'
  },
  priceTag: {
    color: '#040404',
    fontSize: 22,
  },
  burger: {
    position: 'fixed',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "40rem",
    height: "40rem",
    filter: 'brightness(0.80) saturate(1.5)'
  },
  content: {
    zIndex: 1,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6em',
  },
  bigText: {
    fontSize: '20rem',
    color: '#fff',
    fontWeight: 900,
    textTransform: 'uppercase',
    bottom: 0,
    paddingTop: '5rem',
    lineHeight: 1,
  },
  bigBackText: {
    fontSize: '18rem',
    color: '#FFA500',
    fontWeight: 900,
    textTransform: 'uppercase',
    position: 'absolute',
    top: '-20%',
    WebkitTextStroke: '1.5px #B8760040'
  },
  bottomCont: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomLeft: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '5rem'
  },
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    justifyContent: 'space-between',
  },
  desc: {
    color: 'orange',
    fontWeight: 500,
    fontSize: 20,
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },
  off: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 20,
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },
  orderButton: {
    backgroundColor: '#fff',
    color: '#040404',
    padding: "12px 30px",
    borderRadius: 30,
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    cursor: 'pointer',
    transition: '.3s all',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#040404',
      color: '#fff',
    }
  },
  buttonText: {
    fontWeight: 900,
    fontSize: 16,
    textTransform: 'uppercase',
    paddingLeft: 10
  }
})

const Fourth = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <div>
              <Typography variant="p" className={classes.mainLogo}>Designs</Typography>
            </div>
            <span style={{flexGrow: 1}}></span>
            <IconButton style={{color: '#fff', backgroundColor: '#040404', boxShadow: '3px 3px 14px #0000006d'}}>
              <ShoppingCartOutlined style={{padding: 2}} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.fixedBackground}>
        <span className={classes.left}></span>
        <span className={classes.right}>
          <Typography variant="p" className={classes.bigBackText}>rger</Typography>
        </span>
      </div>
      <div className={classes.content}>
        <div className={classes.burger}>
          <img src={Burger} alt="burger" className={classes.image} />
        </div>
        <Typography variant="p" className={classes.bigText}>
          <div className={classes.tag}>
            <Typography variant="p" className={classes.priceTag}>$11.00</Typography>
          </div>
          <span style={{color: 'orange'}}>bur</span>
          <span style={{color: '#040404'}}>ger</span>
        </Typography>
        <div className={classes.bottomCont}>
          <div className={classes.bottomLeft}>
            <Typography variant="p" gutterBottom className={classes.desc}>"Order your best burger"</Typography>
            <Typography variant="p" gutterBottom className={classes.off}><Typography variant="p" style={{fontWeight: 200}}> Taste now </Typography>(20% offer)</Typography>
            <div className={classes.orderButton}>
              <ShoppingCartOutlined />
              <Typography variant="p" className={classes.buttonText}>Order Now</Typography>
            </div>
          </div>
          <div className={classes.bottomRight}>
            <FacebookOutlined />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fourth
