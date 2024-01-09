import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Card, CardContent, Typography } from '@mui/material';
import AppBar from './AppBar';
import TransactionTable from './TransactionTable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MainContent = () => {
  return (
    <div>
      <AppBar />
      <div className='overview-section d-flex'>
        <Typography variant="h6" mt={2} gutterBottom>
          Overview
        </Typography>
        <Dropdown>
      <Dropdown.Toggle  className='overview-drop' variant="white" id="dropdown-basic">
        Last Month
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className="overview-cards">
        <Card sx={{width:500}}>
            <CardContent>
                <Typography sx={{fontSize:14}} color="black" gutterBottom>
                    Online Orders
                </Typography>
                <Typography sx={{fontSize:20, fontWeight:600}} color="black" gutterBottom>
                    231
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{width:500}}>
            <CardContent>
                <Typography sx={{fontSize:14}} color="black" gutterBottom>
                    Amount received
                </Typography>
                <Typography sx={{fontSize:20, fontWeight:600}} color="black" gutterBottom>
                ₹23,92,312.19
                </Typography>
            </CardContent>
        </Card>
      </div>
      <div className="table-header">
        <Typography sx={{mt:5,mb:5,fontSize:20, fontWeight:600}}>
            Transactions | This Month
        </Typography>
      </div>
      <TransactionTable/>
      <div className="pagination">
      <Stack spacing={2}>
      <Pagination count={18} color='secondary' shape="rounded" />
    </Stack>
    </div>
    </div>
  );
}

export default MainContent;
