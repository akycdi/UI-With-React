import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Avatar, Box, CssBaseline, Drawer, IconButton, Icon, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Input, InputAdornment, Divider, SliderUnstyled } from '@mui/material'
import { Favorite, Menu, StarRounded, Tune } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const leftSideItems = [
  {name: 'Home', icon: 'cottage'},
  {name: 'Categories', icon: 'category'},
  {name: 'Reservations', icon: 'event_note'},
  {name: 'Favourites', icon: 'favorite'},
]

const horizontalItems = [
  {name: 'Italian', icon: 'local_pizza', color: '#F4F4F4'},
  {name: 'Asian', icon: 'ramen_dining', color: '#F7F3F4'},
  {name: 'Bars', icon: 'local_bar', color: '#F9EEEC'},
  {name: 'Burgers', icon: 'lunch_dining', color: '#F6F7F1'},
  {name: 'Cafe', icon: 'local_cafe', color: '#F9F5F2'},
  {name: 'Pubs', icon: 'sports_bar', color: '#EAE8F3'},
  {name: 'Vegan', icon: 'spa', color: '#FBF8ED'},
  {name: 'Seafood', icon: 'restaurant', color: '#F0FDF3'},
  {name: 'More', icon: 'add', color: '#F6F6F6'}
]

const restaurantList = [
  {name: 'Molon Lave', subName: 'Asian Kitchen', rating: 4.7, price: 55, distance: 0.2, image: 'https://images.unsplash.com/photo-1534476391-1ae99699617b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', color: '#F7F3F4'},
  {name: 'Lureme', subName: 'Cocktail Bar', rating: 4.8, price: 50, distance: 1.2, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', color: '#F9EEEC'},
  {name: 'Boston Seafood', subName: 'SeaFood', rating: 3.9, price: 89, distance: 3.1, image: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', color: '#F0FDF3'},
  {name: 'Powerhouse', subName: 'Vegan', rating: 4.2, price: 28, distance: 0.6, image: 'https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', color: '#FBF8ED'},
]

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
  },
  welcome: {
    fontSize: 14,
    color: '#ffffff60',
    fontWeight: 500,
  },
  name: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: 500,
  },
  map: {
    width: '100%',
    height: '220px',
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#242424',
    padding: '16px'
  },
  beta: {
    fontSize: '0.8rem',
    color: '#181818',
    fontWeight: 'bold',
    backgroundColor: '#464646',
    padding: '2px 10px',
    borderRadius: '20px',
    margin: '4px 6px 12px 0px',
    width: 'max-content',
  },
  appBar: {
    backgroundColor: 'transparent',
    height: '100px',
    margin: '0px 5%',
  },
  topButton: {
    marginLeft: 'auto',
    width: 'max-content',
    backgroundColor: '#181818',
    color: '#f5f5f5',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    borderRadius: 8,
    padding: "10px 16px",
    transition: 'all 0.3s ease-in-out',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    wordWrap: 'normal',
    '&:hover': {
      backgroundColor: '#323232',
    },
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 5%',
  },
  infoLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  infoRight: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  infoResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
  },
  categoryBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 5%',
    overflow: 'auto',
    width: 'auto',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
  },
  categoryIcon: {
    // backgroundColor: '#B1D6E0',
    padding: '20px',
    borderRadius: 150,
    display: 'flex',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: '0.8rem',
    color: '#727272',
    textTransform: 'uppercase',
    paddingTop: 10
  },
  restaurantCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 5%',
    width: '100%',
  },
  cont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  contHeader: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#181818',
  },
  restaurantList: {
    display: 'flex',
    fledDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0px',
    overflow: 'auto',
  },
  restaurant: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '22px',
    borderRadius: '14px',
    width: '100%',
    marginRight: '30px',
  },
  restaurantImage: {
    width: '100%',
    height: '120px',
    borderRadius: 14,
    backgroundColor: '#242424',
    boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
    overflow: 'hidden',
  },
  restaurantInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0px',
  },
  restaurantName: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#181818',
    paddingTop: '10px',
  },
  restaurantSubName: {
    fontSize: '0.8rem',
    color: '#838383',
    fontWeight: 500,
  },
  restaurantDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10px',
  },
  detailsSubBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
  },
  detailsText: {
    fontSize: '1.2rem',
    color: '#181818',
    fontWeight: 'bold',
  },
});

const drawerWidth = 240;

const DSecond = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSideItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    
    <div className={classes.container}>
      <Toolbar />
      <Typography gutterBottom variant="p" className={classes.mainText}>I <Favorite /> Food</Typography>
      <span style={{flexGrow: 0.2}}></span>
      <Avatar 
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        sx={{ width: '70px', height: '70px', margin: '0 auto', border: '2px solid #fff' }}
      />
      <div className={classes.welcomeBox}>
        <Typography variant="p" className={classes.welcome}>Welcome,</Typography>
        <Typography variant="p" className={classes.name}>Kristina Jackson</Typography>
      </div>
      <span style={{flexGrow: 0.3}}></span>
      <List
        sx={{
          '& .Mui-selected': {
            backgroundColor: 'transparent',
            color: '#fff',
          },
          '& .MuiListItem-root': {
            backgroundColor: 'transparent',
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
        style={{display: 'flex', flexDirection: 'column', color: '#ffffff60'}}
      >
        {leftSideItems.map((item, index) => (
          <ListItem key={index}
            selected={selectedIndex === index}
            onClick={(event) => handleSideItemClick(event, index)}
            style={{backgroundColor: 'transparent', cursor: 'pointer'}}
          >
            <ListItemIcon style={{color: selectedIndex === index ? '#fff' : '#ffffff60'}}>
              <Icon baseClassName="material-icons-round">{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText disableTypography primary={item.name} />
          </ListItem>
        ))}
      </List>
      <span style={{flexGrow: 0.3}}></span>
      <div className={classes.map}>
        <Typography variant="p" className={classes.name}>Local advisor</Typography>
        <div className={classes.beta}>beta</div>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#fff', 
          color: '#181818',
          boxShadow: 'none',
        }}
      >
        <Toolbar className={classes.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Input 
            placeholder="Enter your search request..."
            startAdornment={
              <InputAdornment position="start">
                <Icon baseClassName="material-icons-round">search</Icon>
              </InputAdornment>
            }
            sx={{
              width: '50%',
            }}
          />
          <span style={{flexGrow: 1}}></span>
          <IconButton
            color="inherit"
            sx={{ ml: 2 }}
          >
            <Tune />
          </IconButton>
          <div className={classes.topButton}>Go to Premium</div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#181818', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#181818', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar style={{height: 100}} />
        <Box className={classes.infoBox}>
          <div className={classes.infoLeft}>
            <Typography variant="p" sx={{
              fontSize: {sm: '1.4rem', md: '1.8rem', lg: '2.5rem'},
              fontWeight: 'bold',
              color: '#181818',
            }}>Find the best place</Typography>
            <Typography variant="p" sx={{
              fontSize: {sm: '12px', md: '14px', lg: '16px'},
              color: '#727272',
            }}><b>249 restaurants, </b> choose yours</Typography>
          </div>
          <div className={classes.infoRight}>
            <div className={classes.infoResults}>
              <Typography variant="p" sx={{
                fontSize: {sm: '1.2rem', md: '1.4rem', lg: '1.8rem'}, 
                color: '#181818', 
                fontWeight: 'bold'
              }}>94</Typography>
              <Typography variant="p" sx={{
                fontSize: {sm: '12px', md: '14px', lg: '16px'},
                color: '#727272',
              }}>Specials</Typography>
            </div>
            <Divider orientation='vertical' flexItem />
            <div className={classes.infoResults}>
              <Typography variant="p" sx={{
                fontSize: {sm: '1.2rem', md: '1.4rem', lg: '1.8rem'}, 
                color: '#181818', 
                fontWeight: 'bold'
              }}>23</Typography>
              <Typography variant="p" sx={{
                fontSize: {sm: '12px', md: '14px', lg: '16px'},
                color: '#727272',
              }}>Delivery</Typography>
            </div>
          </div>
        </Box>
        <Box className={classes.categoryBox}>
        {
          horizontalItems.map((item, index) => (
            <div className={classes.category} key={index}>
              <div className={classes.categoryIcon} style={{backgroundColor: item.color}}>
                <Icon baseClassName="material-icons-round">{item.icon}</Icon>
              </div>
              <Typography variant="p" className={classes.categoryName}>{item.name}</Typography>
            </div>
          )
        )}
        </Box>
        <Box className={classes.restaurantCont}>
          <div className={classes.cont}>
            <Typography variant="p" className={classes.contHeader}>New restaurants</Typography>
            <span style={{flexGrow: 1}}></span>
            <Box sx={{ width: 260 }}>
              <StyledSlider 
                defaultValue={4}
                max={8}
                valueLabelDisplay="on"
              />
            </Box>
          </div>
          <Box className={classes.restaurantList}>
            {
              restaurantList.map((restaurant, index) => (
                <div className={classes.restaurant} style={{backgroundColor: restaurant.color}} key={index}>
                  <div className={classes.restaurantImage}>
                    <img src={restaurant.image} alt={restaurant.name} style={{width: "100%", height: "100%"}} />
                  </div>
                  <div className={classes.restaurantInfo}>
                    <Typography variant="p" className={classes.restaurantName}>{restaurant.name}</Typography>
                    <Typography variant="p" className={classes.restaurantSubName}>{restaurant.subName}</Typography>
                  </div>
                  <div className={classes.restaurantDetails}>
                    <div className={classes.detailsSubBox}>
                      <StarRounded fontSize='small' />
                      <Typography variant="p" className={classes.detailsText}>{restaurant.rating}</Typography>
                    </div>
                    <Divider orientation='vertical' flexItem />
                    <div className={classes.detailsSubBox}>
                      <Typography variant="p" style={{fontSize: 13, fontWeight: 500}}>$$$</Typography>
                      <Typography variant="p" className={classes.detailsText}>{restaurant.price}</Typography>
                    </div>
                    <Divider orientation='vertical' flexItem />
                    <div className={classes.detailsSubBox}>
                      <Typography variant="p" style={{fontSize: 13, fontWeight: 500}}>km</Typography>
                      <Typography variant="p" className={classes.detailsText}>{restaurant.distance}</Typography>
                    </div>
                  </div>
                </div>
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

DSecond.propTypes = {
  window: PropTypes.func,
};

export default DSecond

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#181818' : '#f1f1f1'};
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-valueLabel {
    position: absolute;
    top: -30px;
    left: -15px;
    background-color: #1818181c;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 15px;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #b1b1b1;
    opacity: 0.38;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 3px solid currentColor;
    background-color: #fff;
  }
`,
);