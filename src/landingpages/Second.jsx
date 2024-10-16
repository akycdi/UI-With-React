import React from 'react'
import { Typography, AppBar, Container, Toolbar, Grid } from '@mui/material'
import '../css/Second.css'
import { ArrowForward, KeyboardArrowDown, Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import Airbnb from '../assets/Airbnb.png'
import Figma from '../assets/Figma.png'
import Google from '../assets/Google.png'
import Instagram from '../assets/Instagram.png'
import Netflix from '../assets/Netflix.png'
import Paypal from '../assets/Paypal.png'
import CreativeCloud from '../assets/CreativeCloud.png'
import Slack from '../assets/Slack.png'
import Twitter from '../assets/Twitter.png'

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
    color: '#003087',
    fontWeight: 700,
    padding: '10px 25px',
    fontSize: 22,
  },
  navItem: {
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    padding: '10px 25px',
    fontSize: 14,
    fontWeight: 600,
    color: '#003087',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    padding: '12px 25px',
    fontSize: 14,
    color: '#ffffffbd',
    fontWeight: 500,
    backgroundColor: '#003087',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12
  },
  mainContent: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 50,
  },
  mainText: {
    fontSize: 68,
    fontWeight: 500,
    width: '100%',
    color: '#003087',
    lineHeight: 1,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '50px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0px 12px 24px #BCC7CC30',
    overflow: 'hidden',
  },
  searchInput: {
    width: '100%',
    height: '100%',
    border: 'none',
    padding: '30px 25px',
    fontSize: 14,
    fontWeight: 500,
    outline: 'none',
  },
  searchButton: {
    width: 120,
    outline: 'none',
    height: '80px',
    border: 'none',
    borderRadius: '0px 12px 12px 0px',
    padding: '10px 25px',
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: '#003087',
    color: '#ffffffbd',
    cursor: 'pointer',
  },
  cont: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
  },
  items: {
    backgroundColor: '#ffffff80',
    margin: 20,
    borderRadius: 25,
    overflow: 'hidden',
    display: 'flex',
    boxShadow: '-8px 12px 20px #FED2B130',
  },
  anchor: {
    backgroundColor: '#fff',
    height: '92%',
    width: '100%',
    padding: "35px 30px",
    borderRadius: 25,
    justifySelf: 'flex-start'
  }
})

const sideIcons = [
  {url: 'https://www.adobe.com/creativecloud.html', image: CreativeCloud},
  {url: 'https://www.google.com/', image: Google},
  {url: 'https://airbnb.com/', image: Airbnb},
  {url: 'https://www.instagram.com/', image: Instagram},
  {url: 'https://www.slack.com/', image: Slack},
  {url: 'https://www.figma.com/', image: Figma},
  {url: 'https://www.netflix.com/', image: Netflix},
  {url: 'https://www.twitter.com/', image: Twitter},
  {url: 'https://www.paypal.com/', image: Paypal},
]

const Second = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <div>
              <Typography variant="p" className={classes.menuIcon}>Backify</Typography>
            </div>
            <span style={{flexGrow: 0.15}}></span>
            <Typography className={classes.navItem} variant="p">
              Shops
              <KeyboardArrowDown />
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Promotions
            </Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              Login
            </Typography>
            <div className={classes.button}>Try it free</div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="background">
        <Grid container spacing={0}>  
          <Grid item xs={6}>
            <div className={classes.mainContent}>
              <Typography variant="p" className={classes.mainText}>
                Save your money everytime you purchase online!
              </Typography>
              <div className={classes.searchBar}>
                <Search style={{marginLeft: 15, color: '#a5a5a5'}} />
                <input type="text" placeholder="What are you looking for today?" className={classes.searchInput} />
                <button className={classes.searchButton}>Search</button>
              </div>
              <Typography className={classes.navItem} style={{marginTop: 20, paddingLeft: 0}} variant="p">
                  Try it free <ArrowForward style={{marginLeft: 15, fontSize: 18}} />
                </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.mainContent} style={{alignItems: 'flex-end'}}>
              <div className={classes.cont}>
              {
                sideIcons.map((item, index) => {
                  return (
                    <div key={index} className={classes.items}>
                      <a href={item.url} className={classes.anchor} rel="noreferrer" target="_blank">
                        <img src={item.image} alt="logo" style={{width: 40, height: 40}} />
                      </a>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </Grid>
        </Grid>
        
      </div>
    </div>
  )
}

export default Second
