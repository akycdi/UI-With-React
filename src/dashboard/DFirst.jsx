import React from 'react'
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { InputBase, Container, Button, Avatar, Tooltip, Grid, AvatarGroup} from '@mui/material';
import SkModernist from '../assets/fonts/Sk-Modernist-Regular.otf';

const LeftSideItems = [
  {name: 'Dashboard', icon: 'dashboard'},
  {name: 'Market', icon: 'shopping_cart'},
  {name: 'Active Bids', icon: 'analytics'},
  {name: 'Favourites', icon: 'favorite'},
  {name: 'My Portfolio', icon: 'star_half'},
  {name: 'Wallet', icon: 'account_balance_wallet'},
  {name: 'History', icon: 'history'},
  {name: 'Settings', icon: 'settings'},
]

const TopCreators = [
  {name: 'Arun', username: '@arun', image: 'https://picsum.photos/200/300', follow: true},
  {name: 'Kumar', username: '@arun', image: 'https://picsum.photos/200/300', follow: true},
  {name: 'Borru', username: '@arun', image: 'https://picsum.photos/200/300', follow: true},

]

const History = [
  {title: 'Boston Library NFT Sold', subTitle: 'Sold at 1.32 ETH', image: 'https://picsum.photos/200/300', time: 'Just Now'},
  {title: 'New NFT Uploaded', subTitle: 'By Manisol Pena', image: 'https://picsum.photos/200/300', time: '1hr ago'},
  {title: 'You followed a creator', subTitle: 'Cortez Kirk', image: 'https://picsum.photos/200/300', time: '2hrs ago'},
  {title: 'You placed a bid', subTitle: 'Whirl wind NFT', image: 'https://picsum.photos/200/300', time: '3hrs ago'},
  {title: 'You followed a creator', subTitle: 'Elisa Ellis', image: 'https://picsum.photos/200/300', time: '4hrs ago'},
]

const TrendingNFTs = [
  {title: 'Realistic Mountain', subTitle: 'By Johnson Moss', totalP: 94, image: 'https://source.unsplash.com/random', current: '0.42 ETH'},
  {title: 'Vernice Canal', subTitle: 'By Roy Tumbuckle', totalP: 78, image: 'https://source.unsplash.com/random', current: '0.91 ETH'},
  {title: 'Vernice Canal', subTitle: 'By Roy Tumbuckle', totalP: 78, image: 'https://source.unsplash.com/random', current: '0.91 ETH'},
]

const useStyles = makeStyles({
  title: {
    fontSize: 22,
    fontWeight: 500,
    padding: '0px 20px',
    color: '#636363',
  },
  appBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px',
    color: '#9a9a9a',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px',
    color: '#9a9a9a',
    backgroundColor: '#fff',
    borderRadius: '17px',
    width: '70%',
  },
  coverBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '220px',
    width: '100%',
    background: 'linear-gradient(170deg, rgba(238,9,121,1) 15%, rgba(255,106,0,1) 76%)',
    borderRadius: '20px',
    color: '#fff',
    padding: '30px 40px'
  },
  coverText: {
    fontSize: '1.8rem',
    fontWeight: 500,
    width: '300px',
  },
  coverButton: {
    textTransform: 'capitalize',
    color: '#fff',
    borderRadius: '20px',
  },
  sideBoxes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '20px 10px',
    marginBottom: '20px',
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0px 10px',
  },
  boxTitle: {
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#545454',
  },
  boxSubtitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#9a9a9a',
    padding: '3px 10px',
    cursor: 'pointer',
  },
  boxSubtitleActive: {
    backgroundColor: '#F64D7020',
    color: '#F64D70',
    borderRadius: 20
  },
  boxItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '13px 10px',
    color: '#626262',
    borderRadius: 16,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 8px 20px #00000010',
    }
  },
  dots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80px',
    padding: '25px 10px',
    alignSelf: 'center',
  },
  activeDot: {
    backgroundColor: '#F64D70',
    width: '10px',
    height: '10px',
    borderRadius: '20px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  inactiveDot: {
    backgroundColor: '#e0e0e0',
    width: '8px',
    height: '8px',
    borderRadius: '20px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  contentBox: {
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    minWidth: 280,
    borderRadius: '16px',
    padding: '10px',
  },
  cardMedia: {
    height: 190,
    width: "100%",
    borderRadius: '16px',
    objectFit: 'cover',
  },
  cardContent: {
  },
  bidBtn: {
    backgroundColor: '#3c3c3c',
    color: '#fff',
    borderRadius: '20px',
    padding: '8px 20px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  }
});

const drawerWidth = 240;
const drawerWidthRight = 360;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, openRight }) => ({
    flexGrow: 1,
    // backgroundColor: '#fafafa', //#e2e2e2
    // height: '100vh',
    paddingTop: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginRight: -drawerWidthRight,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    ...(openRight && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, openRight }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(openRight && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: !open && drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const ContainedButton = styled(Button)(({ theme }) => ({
  color: '#F64D70',
  backgroundColor: '#fff',
  marginRight: 20,
  borderRadius: 30,
  border: '2px solid #fff',
  padding: "6px 16px",
  textTransform: 'capitalize',
  width: 120,
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#fff',
  }
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  border: '2px solid #fff',
  marginRight: 20,
  borderRadius: 30,
  padding: "6px 16px",
  textTransform: 'capitalize',
  width: 120,
  fontSize: 16,
  '&:hover': {
    border: '2px solid #fff',
  }
}));

const muitheme = createTheme({
  typography: {
    fontFamily: SkModernist,
  }
})

const DFirst = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openRight, setOpenRight] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSideItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpenRight = () => {
    setOpenRight(true);
  };

  const handleDrawerCloseRight = () => {
    setOpenRight(false);
  };

  return (
    <ThemeProvider theme={muitheme}>
    <Box sx={{ display: 'flex', backgroundColor: '#fafafa' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor: 'transparent', boxShadow: 'none', justifyContent: 'center', display: 'flex'}} open={open} openRight={openRight}>
        <Toolbar className={classes.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, color: '#9a9a9a', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.searchBar}>
            <Icon className="material-icons-round">search</Icon>
            <InputBase
              placeholder="Tap to search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{width: '100%', paddingLeft: '10px'}}
            />
          </div>
          <span style={{flexGrow: 1}}></span>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenRight}
            edge="end"
            sx={{ ml: 2, color: '#9a9a9a', ...(openRight && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: 'none',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="p" className={classes.title}>Piqo NFT</Typography>
          <IconButton style={{color: '#9a9a9a'}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            '& .Mui-selected': {
              backgroundColor: 'transparent',
              color: '#F64D70',
              borderLeft: '6px solid #F64D70',
            },
            '& .MuiListItem-root': {
              backgroundColor: 'transparent',
              paddingLeft: '40px',
              fontSize: '12px',
              '&:focus': {
                backgroundColor: 'transparent',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              }
            },
            '& .MuiListItemText-root': {
              fontSize: '14px',
            }
          }} 
          style={{height: '100vh', display: 'flex', flexDirection: 'column', color: '#9a9a9a'}}
        >
          <span style={{flexGrow: 0.05}}></span>
          {LeftSideItems.map((item, index) => (
            <>
              <ListItem button 
                key={index}
                selected={selectedIndex === index}
                onClick={(event) => handleSideItemClick(event, index)}
                style={{marginTop: 4, backgroundColor: 'transparent'}}
              >
                <ListItemIcon style={{color: selectedIndex === index ? '#F64D70' : '#9a9a9a'}}>
                  <Icon baseClassName="material-icons-round">{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText disableTypography primary={item.name} />
              </ListItem>
              {index === 3 ? <Divider style={{margin: "20px"}} /> : null}
            </>
          ))}
          <span style={{flexGrow: 0.8}}></span>
          <ListItem button style={{color: '#F64D70'}}>
            <ListItemIcon style={{color: '#F64D70'}}>
              <Icon baseClassName="material-icons-round">logout</Icon>
            </ListItemIcon>
            <ListItemText disableTypography primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open} openRight={openRight}>
        <DrawerHeader />
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
          <Box className={classes.coverBox}>
            <Typography variant="p" className={classes.coverText}>Discover, create and sell your own NFT</Typography>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <ContainedButton 
                variant="contained"
                endIcon={<Icon className="material-icons-round">play_circle</Icon>}
              >Discover</ContainedButton>
              <OutlinedButton variant="outlined">Create</OutlinedButton>
            </div>
          </Box>
          <Box className={classes.dots}>
            <span className={classes.activeDot}></span>
            <span className={classes.inactiveDot}></span>
            <span className={classes.inactiveDot}></span>
          </Box>
          <Box className={classes.contentBox}>
            <Box className={classes.boxHeader}>
              <Typography variant="h6" gutterBottom className={classes.boxTitle}>Trending NFTs</Typography>
              <span style={{flexGrow: 1}}></span>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="p" className={[classes.boxSubtitle, classes.boxSubtitleActive]}>Art</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Music</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Collectibiles</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Utility</Typography>
              </div>
            </Box>
            <Box className={classes.boxContent}>
              <Grid container spacing={2}>
                {TrendingNFTs.map((item, index) => (
                  <Grid item key={index} style={{zIndex: 0}}>
                    <div className={classes.card}>
                      <img
                        className={classes.cardMedia}
                        src={item.image}
                        alt={item.title}
                      />
                      {/* <span style={{position: 'initial', right: 0, top: 0, zIndex: 5, backgroundColor: '#e2e2e2', padding: 6, borderRadius: 25,}}>
                        <Icon sx={{color: "#F64D70"}} className="material-icons-round">favourite_border</Icon>
                      </span> */}
                      <div className={classes.cardContent}>
                        <div style={{display: 'flex', justifyContent: 'space-between', }}>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="p" style={{fontSize: 18, fontWeight: 500}}>
                              {item.title}
                            </Typography>
                            <Typography variant="p" color="textSecondary" style={{fontSize: 12}}>
                              {item.subTitle}
                            </Typography>
                          </div>
                          <AvatarGroup sx={{height: 30, width: 30}} spacing="small">
                            <Avatar sx={{height: 30, width: 30}} alt="Remy Sharp" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30}} alt="Travis Howard" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30}} alt="Agnes Walker" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30, fontSize: 11, display: 'flex', justifyContent: 'flex-end', backgroundColor: '#F64D7020', color: '#F64D70'}}>{item.totalP}</Avatar>
                          </AvatarGroup>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px 0px"}}>
                          <Typography variant="p" color="#F64D70" style={{fontWeight: 500, fontSize: 14}}>
                            Current Bid: {item.current}
                          </Typography>
                          <div className={classes.bidBtn}>Place Bid</div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box className={classes.contentBox}>
            <Box className={classes.boxHeader}>
              <Typography variant="h6" gutterBottom className={classes.boxTitle}>Rcently Added</Typography>
              <span style={{flexGrow: 1}}></span>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="p" className={[classes.boxSubtitle, classes.boxSubtitleActive]}>Art</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Music</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Collectibiles</Typography>
                <Typography variant="p" className={classes.boxSubtitle}>Utility</Typography>
              </div>
            </Box>
            <Box className={classes.boxContent}>
              <Grid container spacing={2}>
                {TrendingNFTs.map((item, index) => (
                  <Grid item key={index}>
                    <div className={classes.card}>
                      <img
                        className={classes.cardMedia}
                        src={item.image}
                        alt={item.title}
                      />
                      <div className={classes.cardContent}>
                        <div style={{display: 'flex', justifyContent: 'space-between', }}>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="p" style={{fontSize: 18, fontWeight: 500}}>
                              {item.title}
                            </Typography>
                            <Typography variant="p" color="textSecondary" style={{fontSize: 12}}>
                              {item.subTitle}
                            </Typography>
                          </div>
                          <AvatarGroup sx={{height: 30, width: 30}} spacing="small">
                            <Avatar sx={{height: 30, width: 30}} alt="Remy Sharp" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30}} alt="Travis Howard" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30}} alt="Agnes Walker" src="https://source.unsplash.com/random" />
                            <Avatar sx={{height: 30, width: 30, fontSize: 11, display: 'flex', justifyContent: 'flex-end', backgroundColor: '#F64D7020', color: '#F64D70'}}>{item.totalP}</Avatar>
                          </AvatarGroup>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px 0px"}}>
                          <Typography variant="p" color="#F64D70" style={{fontWeight: 500, fontSize: 14}}>
                            Current Bid: {item.current}
                          </Typography>
                          <div className={classes.bidBtn}>Place Bid</div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Main>
      <Drawer
        sx={{
          width: drawerWidthRight,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidthRight,
            boxSizing: 'border-box',
            borderLeft: 'none',
            backgroundColor: '#fafafa'
          },
        }}
        variant="persistent"
        anchor="right"
        open={openRight}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerCloseRight}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box className={classes.sideBoxes}>
          <div className={classes.boxHeader}>
            <Typography variant="h6" gutterBottom className={classes.boxTitle}>Top Creators</Typography>
            <Typography variant="p" className={classes.boxSubtitle}>See all</Typography>
          </div>
          <Box style={{width: '100%'}}>
            {
              TopCreators.map((creator, index) => (
                <Box className={classes.boxItem} key={index}>
                  <Typography variant="p" style={{fontWeight: 600, fontSize: 16, marginRight: 10}}>{index+1}.</Typography>
                  <Avatar src={creator.image} style={{marginRight: 15,}} />
                  <span style={{display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden'}}>
                    <Typography variant="p" style={{fontWeight: 500, fontSize: 15}}>{creator.name}</Typography>
                    <Tooltip title={creator.username} arrow>
                      <Typography variant="p" style={{fontSize: 13, textOverflow: 'ellipsis'}}>{creator.username}</Typography>
                    </Tooltip>
                  </span>
                  <div style={{width: 90,padding: "6px 10px", borderRadius: 20, fontWeight: 500, color: creator.follow ? '#fff' : '#F64D70', backgroundColor: creator.follow ? '#F64D70' : '#F64D7020', fontSize: 12, textAlign: 'center'}}>{creator.follow ? 'Following' : 'Follow'}</div>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box className={classes.sideBoxes}>
          <div className={classes.boxHeader}>
            <Typography variant="h6" gutterBottom className={classes.boxTitle}>History</Typography>
            <Typography variant="p" className={classes.boxSubtitle}>See all</Typography>
          </div>
          <Box style={{width: '100%'}}>
            {
              History.map((history, index) => (
                <Box className={classes.boxItem} key={index}>
                  <Avatar src={history.image} style={{marginRight: 15,}} />
                  <span style={{display: 'flex', flex:1, flexDirection: 'column', overflow: 'hidden'}}>
                    <Typography variant="p" style={{fontWeight: 500, fontSize: 15, textOverflow: 'ellipsis'}}>{history.title}</Typography>
                    <Typography variant="p" style={{fontSize: 13, textOverflow: 'ellipsis'}}>{history.subTitle}</Typography>
                  </span>
                  <div style={{borderRadius: 20, fontWeight: 500, color: '#F64D70', fontSize: 12, textAlign: 'center'}}>{history.time}</div>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Drawer>
    </Box>
    </ThemeProvider>
  );
}

export default DFirst
