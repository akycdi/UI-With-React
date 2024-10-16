import React from 'react'
import { Typography, AppBar, Container, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Search } from '@mui/icons-material';

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
    color: '#464646'
  },
  navItem: {
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    padding: '10px 35px',
    fontSize: 14,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  right: {
    height: '70vh',
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  rightImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'grayscale(40%) brightness(120%) contrast(80%) saturate(90%)',
  },
  left: {
    height: '70vh',
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
  },
  leftImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'grayscale(40%) brightness(120%) contrast(80%) saturate(90%)',
  },
  mainText: {
    fontWeight: 900, 
    color: '#000', 
    fontSize: '4.5rem', 
    width: '800px',
    zIndex: 1,
    padding: '50px 70px',
    textTransform: 'capitalize',
  },
  subText: {
    color: '#727272',
    fontSize: '1rem',
    padding: '0px 70px',
    lineHeight: 1.5,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1rem',
    width: 'max-content',
    margin: '10px 70px',
    padding: '18px 60px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '30px 70px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0px 10px',
  },
  itemText: {
    fontSize: '3rem',
    fontWeight: 900,
    color: '#000',
    paddingRight: '14px',
  },
  itemSubText: {
    fontSize: '1rem',
    color: '#727272',
    width: '300px'
  }
});

const Sixth = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <span style={{flexGrow: 0.1}}></span>
            <Typography variant="p" style={{fontWeight: 900, color: '#323232', fontSize: 24}}>SONATO</Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              Home
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Blog
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Support
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Pricing
            </Typography>
            <span style={{flexGrow: 1}}></span>
            <Search />
            <Typography className={classes.navItem} variant="p">
              Contact us
            </Typography>
            <span style={{flexGrow: 0.1}}></span>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.content}>
        <div style={{marginTop: 100, width: '100%', display: 'flex'}}>
          <div className={classes.left}>
            <Typography variant="p" className={classes.mainText}>Architecture with people in mind.</Typography>
            <Typography variant="p" className={classes.subText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat incidunt deserunt dolor doloremque officia sint sequi reiciendis.
            </Typography>
            <div className={classes.button}>
              Discover more
            </div>
          </div>
          <div className={classes.right}>
            <img className={classes.rightImage} src="https://images.unsplash.com/photo-1460647847717-b1b1fa4f1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex'}}>
          <div className={classes.left}>
            <img className={classes.leftImage} src="https://images.unsplash.com/photo-1621203169537-2a7bb9f1c411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
          </div>
          <div className={classes.right}>
            <div className={classes.items}>
              <div className={classes.item}>
                <Typography variant="p" className={classes.itemText}>01</Typography>
                <Typography variant="p" className={classes.itemSubText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat incidunt.
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="p" className={classes.itemText}>02</Typography>
                <Typography variant="p" className={classes.itemSubText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat incidunt.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sixth
