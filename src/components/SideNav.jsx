import React from 'react';
import { CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainContent from './MainContent';
import { AssignmentOutlined, WidgetsOutlined, CampaignOutlined, SignalCellularAltOutlined,ColorLensOutlined,BoltOutlined, CreditScoreOutlined } from '@mui/icons-material';

const SideNav = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
        {/* User details section */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', backgroundColor: '#1e2640', color: '#fff' }}>
          <Avatar alt="Nishyan" src="https://i.postimg.cc/MHSbn0Gh/2-Ni-A96s-Imgur.png" sx={{ width: 60, height: 60,borderRadius: '4px' }} />
          <Typography variant="subtitle1" sx={{ margin: 1.5 }}>
            Nishyan
          </Typography>
          <IconButton>
            <ExpandMoreIcon style={{ color: '#fff' }} />
          </IconButton>
        </div>

        {/* List of items/pages */}
        <List style={{height:'100vh',backgroundColor:'#1e2640'}}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentOutlined sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Orders" sx={{ color: '#fff' }}/>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <WidgetsOutlined sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalShippingIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Delivery" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CampaignOutlined sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Marketing"sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SignalCellularAltOutlined sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Analytics"sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <MonetizationOnIcon sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Payments" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Tools"sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalOfferIcon sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Discounts" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Audience" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ColorLensOutlined sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Appearance" sx={{ color: '#fff' }}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BoltOutlined sx={{ color: '#fff' }}/>
            </ListItemIcon>
            <ListItemText primary="Plugins" sx={{ color: '#fff' }}/>
          </ListItem>
          <div className="bottom-nav">
        <div className="bottom-nav-icon">
          <CreditScoreOutlined sx={{ color: '#fff' }}/>
        </div>
        <div className="bottom-nav-text">
          <Typography   sx={{ color: '#ccc',fontSize:10 }} >
          Available credits <br /> <Typography sx={{ color: '#fff',fontSize:20}}>222.10</Typography> 
          </Typography>
        </div>
      </div>
        </List>
      </Drawer>
      <div>
          <MainContent/>
      </div>
    </div>
  );
}

export default SideNav;
