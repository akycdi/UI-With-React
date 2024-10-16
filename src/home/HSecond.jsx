import React from 'react'
import { Typography, AppBar, Button, Stack, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { ArrowCircleRightRounded } from '@mui/icons-material';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#dbfe01', 
    minHeight: '40px',
    width: '97%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#101010',
    padding: '3px',
    borderRadius: 10,
    overflow: 'hidden',
  },
  navItem: {
    cursor: 'pointer',
    padding: '2px 15px',
    fontSize: 13,
    fontWeight: 600,
    display: 'inline-block',
    position: 'relative',
    fontFamily: "'Raleway', sans-serif",
    "&:after": {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      background: '#101010',
      bottom: -5,
      left: 0,
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-in-out'
    },
    "&:hover:after": {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom right'
    }
  },
  content: {
    height: '100vh',
  },
  maintitle: {
    color: '#fff', 
    backgroundColor: '#000',
    padding: '8px 66px',
    borderRadius: 6,
    textTransform: 'uppercase'
  },
  one: {
    cursor: 'pointer',
    height: '100vh',
    color: '#000',
    '&:hover': {
      color: '#fff',
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1614290335665-03caa2185a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
    },
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 0,
    padding: '20px'
  },
  // image: {
  //   objectFit: 'cover',
  //   position: 'absolute',
  //   zIndex: 0,
  //   height: '100%',
  //   maxWidth: "100%"
  // }
});

const StyledDiv = styled((props) => <div {...props} />)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
}));

const ContainedButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  padding: '8px 24px',
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  border: '1px solid #101010',
  textTransform: 'Capitalize',
  backgroundColor: 'transparent',
  color: '#101010da',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: '#f2f2f2',
    backgroundColor: '#101010',
    border: '2px solid #101010',
  }
}));

const HSecond = () => {
  const classes = useStyles();
  const data = [
    {title: 'LABORATORY', designated: 'Discovery', subDes: 'Industry Solutions'},
    {title: 'ENGINEERING', designated: 'Chemical', subDes: 'Synthetic Fibers Metal'},
    {title: 'LAB PRODUCTION', designated: 'Racks', subDes: 'Exhibition System'},
    {title: 'PROJECTS 3D', designated: 'Analysis', subDes: 'Product Sketch'}
  ]
  return (
    <>
      <StyledDiv>
        <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none', top: 24, borderRadius: 10 }} position="absolute">
          <div className={classes.appBar}>
            <div className={classes.maintitle}>
              <Typography style={{fontWeight: 600, fontSize: 18, letterSpacing: 1, fontFamily: "'Raleway', sans-serif",}}>facture</Typography>
            </div>
              <Typography className={classes.navItem} variant="p">
                Home Page
              </Typography>
              <Typography className={classes.navItem} variant="p">
                About Us
              </Typography>
              <Typography className={classes.navItem} variant="p">
                Portfolio
              </Typography>
              <Typography className={classes.navItem} variant="p">
                Download
              </Typography>
              <span style={{flexGrow: 1}}></span>
              <ContainedButton style={{borderRadius: 6, marginRight: 4}}>Solutions</ContainedButton>
              <ContainedButton style={{borderRadius: 6}}>Get Started</ContainedButton>
          </div>
        </AppBar>
        <div className={classes.content}>
          <Grid container spacing={1} columns={{xs: 1, md: 2, xl: 4}}>
            {data.map((item, index) => (
              <Grid item xs={1} style={{height: '100vh', width: '100%'}}>
                <div className={classes.one}>
                  <span style={{flexGrow: 1}}></span>
                  <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'flex-end'}>
                    <Typography style={{fontSize: 260, zIndex: 2, fontFamily: "'Dosis', sans-serif", alignSelf: 'center'}}>{index+1}</Typography>
                    <Typography style={{alignSelf: 'flex-start', fontFamily: "'Raleway', sans-serif", fontSize: 18, fontWeight: '600', textTransform: 'Capitalize', border: '1px solid', padding: "0px 6px", lineHeight: 1, borderRadius: 20}}>{item.title}</Typography>
                  </Stack>
                  <span style={{flexGrow: 1}}></span>
                  <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'flex-end'} alignSelf={'flex-start'}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <div>
                        <Typography style={{fontFamily: "'Raleway', sans-serif", fontSize: 16, fontWeight: '600'}}>{item.designated}</Typography>
                        <Typography style={{fontFamily: "'Raleway', sans-serif", fontSize: 16, fontWeight: '600'}}>{item.subDes}</Typography>
                      </div>
                      <span style={{flexGrow: 1}}></span>
                      <ArrowCircleRightRounded />
                    </Stack>
                  </Stack>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </StyledDiv>
    </>
  )
}

export default HSecond