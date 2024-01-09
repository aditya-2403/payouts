// AppBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MyAppBar = () => {
  return (
    <AppBar className='appbar' style={{backgroundColor:'#fff'}} position="static">
      <Toolbar>
        {/* Leftmost Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black' }}>
            Payments
          </Typography>
          <Tooltip title="How it Works">
            <IconButton color="black">
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Typography sx={{color:'black'}}>
                How it Works
            </Typography>
        </div>

        {/* Center Section */}
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
          <SearchIcon sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)',left:'-15px', color: '#555' }} />
            <InputBase className='search-bar'
              placeholder="Search features, tutorials, etc."
              sx={{ ml: 2, width: '500px', color: '#555',border:'2px'}}
            />
          </div>
        </div>

        {/* Rightmost Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Feedback">
          <IconButton className='feed-btn' color="black" sx={{backgroundColor:'#e6e6e6'}}>
              <FeedbackIcon />
            </IconButton>
          </Tooltip>
          <IconButton color="black" sx={{backgroundColor:'#e6e6e6'}}>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
