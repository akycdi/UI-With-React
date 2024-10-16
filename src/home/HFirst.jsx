import React from 'react'
import { Typography, AppBar, Toolbar, Button, Stack, IconButton, Grid, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { Instagram, Twitter, YouTube, TrendingFlatRounded, FormatQuoteRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import Oracle from '../assets/Oracle.png';
import Asus from '../assets/Asus.png';
import Loreal from '../assets/Loreal.png';
import Foxconn from '../assets/Foxconn.png';
import Siemens from '../assets/Siemens.png';
import Casio from '../assets/Casio.png';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#101010',
    padding: '0px 15%'
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
    width: '100%',
    margin: '70px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  social: {
    color: '#101010',
    border: '2px solid #101010',
    borderRadius: '50px',
    padding: '16px 6px',
    height: '100%',
    width: '100px'
  },
  card: {
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    padding: '16px',
  },
  cardNum: {
    fontSize: 22, 
    fontWeight: 700, 
    fontFamily: "'Raleway', sans-serif", 
    color: '#fff', 
    backgroundColor: '#101010',
    padding: '6px 10px',
    borderRadius: 6,
  }
});

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#101010',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#101010',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '40px',
    '&.Mui-focused fieldset': {
      borderColor: '#101010',
    },
  },
});

const StyledDiv = styled((props) => <div {...props} />)(({ theme }) => ({
  padding: '20px 15%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 20px'
  }
}));

const ContainedButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  padding: '6px 24px',
  marginRight: '10px',
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  border: '2px solid #101010',
  backgroundColor: '#101010',
  textTransform: 'Capitalize',
  color: '#f2f2f2',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: '#101010da',
    backgroundColor: 'transparent',
    border: '2px solid #101010',
  }
}));

const ContainedButtonRev = styled((props) => <Button {...props} />)(({ theme }) => ({
  padding: '6px 24px',
  marginRight: '10px',
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  border: '2px solid #101010',
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

const StyledTypography = styled((props) => <Typography {...props} />)(({ theme }) => ({
  color: '#101010',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 600,
  fontSize: "4rem",
  [theme.breakpoints.down('md')]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.3rem",
  },
}));

const HFirst = () => {
  const classes = useStyles();
  return (
    <>
      <StyledDiv>
        <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
          <Toolbar className={classes.appBar} disableGutters>
          <Typography style={{fontWeight: 600, color: '#101010', fontSize: 20, letterSpacing: 1, fontFamily: "'Raleway', sans-serif",}}>Business</Typography>
            <span style={{flexGrow: 1}}></span>
            <Typography className={classes.navItem} variant="p">
              Home
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Services
            </Typography>
            <Typography className={classes.navItem} variant="p">
              Our team
            </Typography>
            <Typography className={classes.navItem} variant="p">
              E-learning
            </Typography>
            <span style={{flexGrow: 1}}></span>
            <ContainedButton style={{borderRadius: "50px"}}>Contact us</ContainedButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <StyledTypography>
            Boost Your Profits By Growing
          </StyledTypography>
          <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"}>
            <StyledTypography>Your Business</StyledTypography>
            {/* <span style={{fontWeight: 400, fontSize: 14, color: '#727272', padding: "10px 20px"}}>
              Boost your profits by growing your business Generate more sales orimprove your digital strategy.
            </span> */}
          </Stack>
          <Grid container spacing={1} columns={{xs: 1, md: 2, xl: 3}} style={{margin: "16px 0px", width: "100%"}}>
            <Grid item xs={0.8}>
              <Stack direction={"column"} style={{height: "100%"}}>
                <Stack direction={"row"} alignItems={"center"}>
                  <ContainedButton>Get in Touch</ContainedButton>
                  <ContainedButtonRev>About us</ContainedButtonRev>
                </Stack>
                <span style={{flexGrow: 1}}></span>
                <Typography style={{fontSize: 18, fontWeight: 600, fontFamily: "'Raleway', sans-serif", margin: "16px 0px"}}>
                  A Comprehensive Directory Database
                </Typography>
                <span style={{flexGrow: 1}}></span>
                <Stack direction={"row"} alignItems={"center"} style={{margin: "16px 0px"}}>
                  <Stack direction={"column"} alignItems={"flex-start"} style={{paddingRight: 20}}>
                    <Typography style={{fontSize: 18, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>8+</Typography>
                    <Typography style={{fontSize: 13, fontWeight: 600, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>Years of Experience</Typography>
                  </Stack>
                  <Stack direction={"column"} alignItems={"flex-start"} style={{paddingRight: 20}}>
                    <Typography style={{fontSize: 18, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>100+</Typography>
                    <Typography style={{fontSize: 13, fontWeight: 600, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>Places in the world</Typography>
                  </Stack>
                  <Stack direction={"column"} alignItems={"flex-start"} style={{paddingRight: 20}}>
                    <Typography style={{fontSize: 18, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>10k</Typography>
                    <Typography style={{fontSize: 13, fontWeight: 600, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>Happy Peoples</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <span style={{flexGrow: 1}}></span>
            <Grid item xs={1.4}>
              <img src={"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt="img" width="500" style={{borderRadius: 30, width: "100%", height: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
            </Grid>
            <span style={{flexGrow: 1}}></span>
            <Grid item xs={0.3}>
              <Stack direction={"column"} alignItems={"center"} className={classes.social}>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <Instagram />
                </IconButton>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <Twitter />
                </IconButton>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <YouTube />
                </IconButton>
                <span style={{flexGrow: .5}}></span>
                <Typography style={{transform: 'rotate(90deg)', display: 'flex', alignItems: 'center', fontWeight: 500}}>Social<TrendingFlatRounded style={{marginLeft: 10}} /></Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container columns={{xs: 2, md: 3, xl: 6}} style={{margin: "16px 0px", display: 'flex', alignItems: 'center'}}>
            <Grid item xs={1}>
              <img src={Oracle} alt="oracle" height="60" style={{ filter: 'grayscale(100%)', opacity: 0.6}} />
            </Grid>
            <Grid item xs={1}>
              <img src={Asus} alt="asus" height="43" style={{ filter: 'grayscale(100%)', opacity: 0.4}} />
            </Grid>
            <Grid item xs={1}>
              <img src={Loreal} alt="loreal" height="48" style={{ filter: 'grayscale(100%)', opacity: 0.5}} />
            </Grid>
            <Grid item xs={1}>
              <img src={Foxconn} alt="foxconn" height="62" style={{ filter: 'grayscale(100%)', opacity: 0.5}} />
            </Grid>
            <Grid item xs={1}>
              <img src={Siemens} alt="siemens" height="48" style={{ filter: 'grayscale(100%)', opacity: 0.6}} />
            </Grid>
            <Grid item xs={1}>
              <img src={Casio} alt="casio" height="15" style={{ filter: 'grayscale(100%)', opacity: 0.4}} />
            </Grid>
          </Grid>
        </div>
      </StyledDiv>
      <StyledDiv style={{backgroundColor: '#f7f7f7'}}>
        <Typography style={{fontSize: 34, fontWeight: 600, fontFamily: "'Raleway', sans-serif", marginTop: "3rem"}}>Our Services</Typography>
        <Grid container rowSpacing={2} columnSpacing={1} columns={{xs: 1, md: 2, xl: 3}} style={{margin: "14px 0px"}}>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <Typography className={classes.cardNum}>01</Typography>
              <Typography style={{fontSize: 18, fontWeight: 600, color: '#101010', marginTop: '16px', marginBottom: '12px', fontFamily: "'Raleway', sans-serif"}}>Content Production</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>In the case of business, the production of products must be provided</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <Typography className={classes.cardNum}>02</Typography>
              <Typography style={{fontSize: 18, fontWeight: 600, color: '#101010', marginTop: '16px', marginBottom: '12px', fontFamily: "'Raleway', sans-serif"}}>Business Development</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>To improve the business, the capital must be uncreased to reach line</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <Typography className={classes.cardNum}>03</Typography>
              <Typography style={{fontSize: 18, fontWeight: 600, color: '#101010', marginTop: '16px', marginBottom: '12px', fontFamily: "'Raleway', sans-serif"}}>Business</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>To improve the business, the capital must be uncreased to reach line</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={1} columns={{xs: 1, md: 1, xl: 2}} style={{margin: "3rem 0px", display: 'flex', alignItems: 'flex-end'}}>
          <Grid item xs={1}>
            <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"center"}>
              <Typography style={{fontSize: 34, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>We help you market your business online</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif", marginTop: 10}}>Our provide digital marketing services to help you grow your business</Typography>
              <ul style={{margin: "20px 22px", color: '#323232'}}>
                <li><Typography style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, fontWeight: 600 }}>Strategy tailored to your business</Typography></li>
                <li><Typography style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, fontWeight: 600 }}>Rules for achieving the goals</Typography></li>
                <li><Typography style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, fontWeight: 600 }}>Service with a proven strategy</Typography></li>
              </ul>
              <ContainedButton>Learn More</ContainedButton>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <div style={{position: 'relative', top: 0, right: 0, float: "right"}}>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcwfHxidXNpbmVzc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" height="300" style={{position: "relative", top: 0, right: 0, border: '4px solid #f7f7f7'}} />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" height="230" style={{position: "absolute", bottom: -60, left: -80, border: '4px solid #f7f7f7'}} />
            </div>
          </Grid>
        </Grid>
      </StyledDiv>
      <StyledDiv>
        <Grid container spacing={1} columns={{xs: 1, md: 1, xl: 2}} style={{margin: "4rem 0px", display: 'flex', alignItems: 'center'}}>
          <Grid item xs={1}>
            <div style={{position: 'relative', top: 0, left: 0}}>
              <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" height="300" style={{position: "relative", top: 0, left: 0, borderRadius: 22, filter: "grayscale(40%)"}} />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" height="230" style={{position: "absolute", bottom: -60, left: 150, borderRadius: 22}} />
            </div>
          </Grid>
          <Grid item xs={1}>
            <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"center"}>
              <Typography style={{fontSize: 34, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>Use Markets to take your business to the next level</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif", marginTop: 10, marginBottom: 12}}>Our provide digital marketing services to help you grow your business</Typography>
              <ContainedButton>Learn More</ContainedButton>
            </Stack>
          </Grid>
        </Grid>
      </StyledDiv>
      <StyledDiv style={{backgroundColor: '#f7f7f7'}}>
        <Typography style={{fontSize: 34, fontWeight: 600, fontFamily: "'Raleway', sans-serif", marginTop: "3rem"}}>Meet Our Agent</Typography>
        <Grid container rowSpacing={2} columnSpacing={1} columns={{xs: 1, md: 2, xl: 3}} style={{margin: "14px 0px"}}>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <div>
                <img src="https://images.unsplash.com/photo-1613650329169-2abe5ca185a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80" alt="" style={{width: "100%", height: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: 8}} />
              </div>
              <Typography style={{fontSize: 16, fontWeight: 600, color: '#101010', marginTop: '16px', fontFamily: "'Raleway', sans-serif"}}>Natasha Romanoff</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>In the case of buprovided</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <div>
                <img src="https://images.unsplash.com/photo-1613650329169-2abe5ca185a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80" alt="" style={{width: "100%", height: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: 8}} />
              </div>
              <Typography style={{fontSize: 16, fontWeight: 600, color: '#101010', marginTop: '16px', fontFamily: "'Raleway', sans-serif"}}>Peggy Carter</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>To improve the busineach line</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start" className={classes.card}>
              <div>
                <img src="https://images.unsplash.com/photo-1613650329169-2abe5ca185a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80" alt="" style={{width: "100%", height: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: 8}} />
              </div>
              <Typography style={{fontSize: 16, fontWeight: 600, color: '#101010', marginTop: '16px', fontFamily: "'Raleway', sans-serif"}}>Wanda Maximoff</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>To improve the busineach line</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={{xs: 1, md: 1, xl: 2}} style={{margin: "3rem 0px"}}>
          <Grid item xs={1}>
            <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="340" style={{borderRadius: 16, boxShadow: "-10px -10px 0px #232323"}} />
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <FormatQuoteRounded style={{fontSize: 80, color: '#727272'}} />
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif"}}>We are a group of people who are passionate about the business. We are a group of people who are passionate about the business. We are a group of people who are passionate about the business. We are a group of people who are passionate about the business. </Typography>
              <Stack direction="row" alignItems="center" justifyContent={"space-between"} style={{marginTop: 20, width: "100%"}}>
                <div>
                  <Typography style={{fontSize: 22, fontWeight: 600, fontFamily: "'Raleway', sans-serif"}}>Kevin Lynche</Typography>
                  <Typography style={{fontSize: 16, fontWeight: 600, color: '#464646', fontFamily: "'Raleway', sans-serif"}}>Engineer</Typography>
                </div>
                <div>
                  <KeyboardArrowLeftRounded style={{fontSize: 34, color: '#f5f5f5', backgroundColor: "#aaaaaa", margin: "8px", borderRadius: 4, cursor: "pointer", boxShadow: "1px 1px 3px #10101030"}} />
                  <KeyboardArrowRightRounded style={{fontSize: 34, color: '#f5f5f5', backgroundColor: "#727272", margin: "8px", borderRadius: 4, cursor: "pointer", boxShadow: "1px 1px 3px #10101030"}} />
                </div>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={1} columns={{xs: 1, md: 1, xl: 2}} style={{margin: "3rem 0px", display: 'flex', alignItems: 'center'}}>
          <Grid item xs={1}>
            <Typography style={{fontSize: 34, fontWeight: 600, fontFamily: "'Raleway', sans-serif", textTransform: "uppercase"}}>subscribe to our newsletter.</Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container spacing={2} columns={{xs: 1, md: 1, xl: 2}}>
              <Grid item xs={1}>
                <StyledTextField label="First Name" variant="standard" fullWidth size='small'/>
              </Grid>
              <Grid item xs={1}>
                <StyledTextField label="Last Name" variant="standard" fullWidth size='small'/>
              </Grid>
              <Grid item xs={1}>
                <StyledTextField label="Email address" variant="standard" fullWidth size='small'/>
              </Grid>
              <Grid item xs={1}>
                <ContainedButton style={{width: "100%"}}>Subscribe Now</ContainedButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledDiv>
      <StyledDiv>
        <Grid container spacing={2} columns={{xs: 1, md: 3, xl: 5}} style={{margin: "1rem 0px"}}>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <Typography style={{fontWeight: 600, color: '#101010', fontFamily: "'Raleway', sans-serif", fontSize: 20, letterSpacing: 1}}>Business</Typography>
              <Typography style={{fontSize: 14, fontWeight: 500, color: '#727272', fontFamily: "'Raleway', sans-serif", marginTop: 10}}>Boost your profits by growing your business Generate more sales orimprove your digital strategy.</Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <Instagram />
                </IconButton>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <Twitter />
                </IconButton>
                <IconButton size='small' style={{backgroundColor: "#101010", color: '#fff', margin: 10}}>
                  <YouTube />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <Typography style={{fontWeight: 600, color: '#101010', fontSize: 16, fontFamily: "'Raleway', sans-serif", letterSpacing: 1}}>Quick Links</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 15, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <Typography style={{fontWeight: 600, color: '#101010', fontSize: 16, fontFamily: "'Raleway', sans-serif", letterSpacing: 1}}>Quick Links</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 15, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <Typography style={{fontWeight: 600, color: '#101010', fontSize: 16, fontFamily: "'Raleway', sans-serif", letterSpacing: 1}}>Quick Links</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 15, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="column" alignItems="flex-start">
              <Typography style={{fontWeight: 600, color: '#101010', fontSize: 16, fontFamily: "'Raleway', sans-serif", letterSpacing: 1}}>Quick Links</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 15, fontSize: 14, fontWeight: 500}}>Some link</Typography>
              <Typography style={{fontFamily: "'Raleway', sans-serif", color: '#727272', marginTop: 5, fontSize: 14, fontWeight: 500}}>Some link</Typography>
            </Stack>
          </Grid>
        </Grid>
      </StyledDiv>
    </>
  )
}

export default HFirst