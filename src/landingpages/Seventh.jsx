import React from 'react'
import { Typography, Box, Tab, Tabs, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { KeyboardArrowRightRounded } from '@mui/icons-material';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex'
  },
  content: {
    width: '100%',
    padding: "0px 7%"
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  authBtns: {
    margin: "0px 4px",
    cursor: 'pointer',
    padding: '10px 15px',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeight: 500,
    '&:hover': {
      color: '#eea852',
    }
  },
  firstImg: {
    height: 'max-content',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: -1,
    display: 'flex',
    justifyContent: 'flex-start',
    border: '5px solid #fff',
  },
  secondImg: {
    height: 'max-content',
    width: 'max-content',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: 1,
    position: 'relative',
    top: '-150px',
    left: '400px',
    display: 'flex',
    border: '5px solid #fff',
    justifyContent: 'flex-start',
  },
  img1: {
    height: '400px',
    width: '600px',
    objectFit: 'cover',
  },
  img2: {
    height: '250px',
    objectFit: 'cover',
  },
  headerCont: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 50px',
    width: '100%',
    maxWidth: '40rem',
  },
  textx: {
    fontSize: 44,
    fontWeight: 500,
    color: '#464646',
    fontFamily: [
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'Ralleway',
    ].join(',')
  },
  textx2: {
    fontSize: 36,
    fontWeight: 400,
    color: "#525252",
    fontFamily: [
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'Ralleway',
    ].join(',')
  },
  nextPage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirdImg: {
    height: '350px',
    padding: '0px 30px',
    border: '5px solid #fff',
    position: 'relative',
    top: '100px',
  },
  fourthImg: {
    height: '350px',
    padding: '0px 30px',
    border: '5px solid #fff',
    position: 'relative',
    top: '-50px',
  }
})

const ContainedButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  marginTop: '30px',
  padding: '10px 30px',
  fontSize: 14,
  width: 'max-content',
  height: 'max-content',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  border: 'none',
  backgroundColor: '#eea852',
  textTransform: 'Capitalize',
  color: '#464646',
  fontFamily: [
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    'Ralleway',
  ],
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#eea152',
  }
}));

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#eea852',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#eea852a2',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#eea852',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const Seventh = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ bgcolor: '#fff' }}>
            <AntTabs 
              value={value} 
              onChange={handleChange} 
              aria-label="ant example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <AntTab label="Home" />
              <AntTab label="Store" />
              <AntTab label="Projects" />
              <span style={{flexGrow: 1}}></span>
              <span className={classes.authBtns}>Login</span>
              <span className={classes.authBtns}>Signup</span>
            </AntTabs>
            <Box sx={{ p: 3 }} />
            {value === 0 && <Home />}
            {value === 1 && <Store />}
            {value === 2 && <Projects />}
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Seventh

const Home = () => {
  const classes = useStyles();
  return(
    <div>
      <div className={classes.firstImg}>
        <img className={classes.img1} src="https://images.unsplash.com/photo-1618221770758-01929bf5ed39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="interior1" />
        <div className={classes.headerCont}>
          <span className={classes.textx}>Modern Interior</span>
          <span className={classes.textx2}>Design Studio</span>
        </div>
      </div>
      <div className={classes.secondImg}>
        <img className={classes.img2} src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="interior2" />
        <div className={classes.headerCont}>
          <Typography color="#727272">lorem ipsum dolor sit amet, consectetur adip eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam aliqua. Excepteur sint occaecat cupidatat</Typography>
          <ContainedButton><span>Explore More </span><KeyboardArrowRightRounded /></ContainedButton>
        </div>
      </div>
      <div className={classes.nextPage}>
        <div className={classes.headerCont} style={{maxWidth: 'max-content'}}>
          <span className={classes.textx2}>We will make these unique tastes of yours a design really!</span>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
            <Typography color="#727272" style={{width: '60%'}}>lorem ipsum dolor sit amet, consectetur adip eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam aliqua. Excepteur sint occaecat cupidatat</Typography>
            <ContainedButton><span>Start Shopping </span><KeyboardArrowRightRounded /></ContainedButton>
          </div>
        </div>
        <div className={classes.images}>
          <img className={classes.thirdImg} src="https://images.unsplash.com/photo-1632392674310-3e695effcca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="pageimg1" />
          <img className={classes.fourthImg} src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="pageimg2" />
        </div>
      </div>
    </div>
  )
}

const Store = () => {
  return(
    <div>
      <h1>Store</h1>
    </div>
  )
}

const Projects = () => {
  return(
    <div>
      <h1>Projects</h1>
    </div>
  )
}