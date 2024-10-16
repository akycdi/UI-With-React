import React from 'react'
import { Typography, AppBar, Container, Toolbar, Box, Tab, Tabs } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import data from './data';
import { useNavigate } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';

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
  github: {
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    color: '#323232',
    textDecoration: 'none',
    '&:hover': {
      color: '#727272'
    }
  },
  content: {
    width: '100%',
    padding: "60px 10%"
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    width: '100%',
    maxWidth: '280px',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#1890ff10',
    margin: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#1890ff20',
    }
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#323232',
  },
  cardSubTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#888888'
  }
});

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
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
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));


const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <span style={{flexGrow: 0.1}}></span>
            <Typography variant="p" style={{fontWeight: 500, color: '#323232', fontSize: 22}}>UI With React</Typography>
            <span style={{flexGrow: 0.05}}></span>
            <span style={{flexGrow: 0.9}}></span>
          </Toolbar>
        </Container>
      </AppBar>
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
              <AntTab label="Landing Pages" />
              <AntTab label="Dashboard Pages" />
              <AntTab label="Home Pages" />
              {/* <AntTab label="Tab 3" /> */}
            </AntTabs>
            <Box sx={{ p: 3 }} />
            {value === 0 && <LandingPage />}
            {value === 1 && <DashboardPage />}
            {value === 2 && <HomePage />}
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Home

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <Typography variant="h4" style={{fontWeight: 500, color: '#323232', fontSize: 22}}>Landing Pages</Typography>
      <Box sx={{ p: 2 }} />
      <Typography variant="p" style={{color: '#727272', fontSize: 14, lineHeight: 2}}>
      A landing page is a follow up to any promises that you've made in your content. 
      Essentially, it's the next step toward a visitor becoming a customer. 
      Your landing page lets you make a trade, some sort of special offer, piece of information or a deal, in return for providing contact information.
      </Typography>
      <Box sx={{ p: 2 }} />
      <div className={classes.cards}>
      {
        data.landingPages.map((item, index) => {
          return (
            <div className={classes.card} onClick={() => navigate(item.link)} key={index}>
              <Typography variant="p" style={{fontWeight: 700, color: '#323232', fontSize: 28}}>{item.id}</Typography>
              <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 16}}>
                <Typography variant="p" className={classes.cardTitle}>{item.title}</Typography>
                <Typography variant="p" className={classes.cardSubTitle}>{item.description}</Typography>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

const DashboardPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <Typography variant="h4" style={{fontWeight: 500, color: '#323232', fontSize: 22}}>Dashboard Pages</Typography>
      <Box sx={{ p: 2 }} />
      <Typography variant="p" style={{color: '#727272', fontSize: 14, lineHeight: 2}}>
      A dashboard is a visual display of all of your data.
      A dashboard usually sits on its own page and receives information from a linked database. 
      In many cases it's configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers.
      </Typography>
      <Box sx={{ p: 2 }} />
      <div className={classes.cards}>
      {
        data.dashboardPages.map((item, index) => {
          return (
            <div className={classes.card} onClick={() => navigate(item.link)} key={index}>
              <Typography variant="p" style={{fontWeight: 700, color: '#323232', fontSize: 28}}>{item.id}</Typography>
              <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 16}}>
                <Typography variant="p" className={classes.cardTitle}>{item.title}</Typography>
                <Typography variant="p" className={classes.cardSubTitle}>{item.description}</Typography>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <Typography variant="h4" style={{fontWeight: 500, color: '#323232', fontSize: 22}}>Home Pages</Typography>
      <Box sx={{ p: 2 }} />
      <Typography variant="p" style={{color: '#727272', fontSize: 14, lineHeight: 2}}>
      A home page is the top-level page of a website and is typically the first page that visitors will see when they arrive at a website. The home page usually contains an overview of the website, as well as links to the other pages within the website.
      </Typography>
      <Box sx={{ p: 2 }} />
      <div className={classes.cards}>
      {
        data.homePages.map((item, index) => {
          return (
            <div className={classes.card} onClick={() => navigate(item.link)} key={index}>
              <Typography variant="p" style={{fontWeight: 700, color: '#323232', fontSize: 28}}>{item.id}</Typography>
              <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 16}}>
                <Typography variant="p" className={classes.cardTitle}>{item.title}</Typography>
                <Typography variant="p" className={classes.cardSubTitle}>{item.description}</Typography>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}