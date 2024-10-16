import React from 'react'
import { Typography, AppBar, Toolbar, Container } from '@mui/material'
import '../css/First.css'
import MenuIcon from '@mui/icons-material/Menu'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

const cards = [
  {number: '02', title: 'Colosseum', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80', date: 'February 4, 2021'},
  {number: '03', title: 'Petra', image: 'https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', date: 'February 10, 2021'},
  {number: '04', title: 'Great wall of china', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', date: 'February 16, 2021'},
  {number: '05', title: 'Machu Picchu', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', date: 'February 22, 2021'},
]

const First = () => {
  return (
    <div className="container">
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className="app-bar" disableGutters>
            <div className="menu-icon">
              <MenuIcon />
            </div>
            <Typography className="nav-item" variant="p" color="inherit">
              Home
            </Typography>
            <Typography className="nav-item" variant="p" color="inherit">
              Explore
            </Typography>
            <Typography className="nav-item" variant="p" color="inherit">
              Pricing
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="content">
        <img className="main-image" src='https://images.unsplash.com/photo-1559583150-7621d10604bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='paris' />
      </div>
      <div className="main">
        <div className="main-content">
          <Typography variant="p" className="item-number">01</Typography>
          <Typography variant="p" className="item-title">Discover Amazing corners of the world.</Typography>
          <Typography variant="p" className="item-description">Explore the Wonders of World</Typography>
          <Typography variant="p" className="item-date">January 30, 2021</Typography>
          <div className="play">
            <PlayCircleFilledRoundedIcon style={{height: 40, width: 40, color: '#dfdfdf'}} />
            <Typography variant="p" className="item-play">Watch Tour Promo</Typography>
          </div>
        </div>
        <div className="side-content">
          {
            cards.map((card, index) => {
              return (
                <div className="side-card" style={{background: `url(${card.image})`}} key={index}>
                  <Typography variant="p" className="card-number">{card.number}</Typography>
                  <PlayCircleFilledRoundedIcon style={{height: 40, width: 40, color: '#dfdfdf'}} />
                  <Typography variant="p" className="card-title">{card.title}</Typography>
                  <Typography variant="p" className="card-date">{card.date}</Typography>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default First
