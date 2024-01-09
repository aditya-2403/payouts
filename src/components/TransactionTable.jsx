import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, TextField,Button } from '@mui/material';
import { ImportExport, Download } from '@mui/icons-material';

const TransactionTable = () => {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('#281209', "7 July 2023", "₹1278.23", "₹22"),
        createData('#281209', "7 July 2023", "₹1278.23", "₹22"),
        createData('#281209', "7 July 2023", "₹1278.23", "₹22"),
        createData('#281209', "7 July 2023", "₹1278.23", "₹22"),
        createData('#281209', "7 July 2023", "₹1278.23", "₹22"),
      ];
  return (
    <div className='transaction-table'>
        <TableContainer component={Paper}>
        <div className="table-up">
            <TextField label="Search by order ID..."/>
            <div className="table-up-btn">
            <Button className='table-up-btn' variant="outlined" endIcon={<ImportExport/>}> Sort </Button>
            <Button className='table-up-btn' style={{color:'black'}} variant="outlined" startIcon={<Download/>}>Download</Button>
            </div>
        </div>
      <Table  sx={{minWidth: 650 }} aria-label="simple table">
        <TableHead className='table-head' style={{backgroundColor:'#e6e6e6'}}>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Order date
            <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
             </TableCell>
            <TableCell align="right">Order amount</TableCell>
            <TableCell align="right">Transaction fees
            <IconButton>
              <HelpIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default TransactionTable