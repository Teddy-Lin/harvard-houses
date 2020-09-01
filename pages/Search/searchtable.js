
  import React from 'react';
  import { withStyles, makeStyles } from '@material-ui/core/styles';
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableContainer from '@material-ui/core/TableContainer';
  import TableHead from '@material-ui/core/TableHead';
  import TableRow from '@material-ui/core/TableRow';
  import Paper from '@material-ui/core/Paper';

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(name, person1, person2, person3, person4, person5, person6, person7, person8) {
    return { name, person1, person2, person3, person4, person5, person6, person7, person8 };
  }

  const rows = [
    createData('Frozen yoghurt', 'Jack Ma', 'Jason Chen', 'Nathan Beaucage', 'Nathaniel Birne', 'Teddy Lin', 'Percy Jackson', 'Paula Leyes', 'Mariah Carey'),
    createData('Ice cream sandwich', 'Mike Lee', 'Mike Crapo', 'Roy Blunt', 'Jack Ma', 'Nathan Beaucage', 'Nathaniel Birne'),
    createData('Eclair', 'John Barrasso'),
    createData('Ice cream sandwich', 'Mike Lee', 'Mike Crapo', 'Roy Blunt', 'Jack Ma', 'Nathan Beaucage', 'Nathaniel Birne'),
    createData('Todd Young', 'Dick Durbin'),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  export default function SearchTable() {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Blocking Group</StyledTableCell>
              <StyledTableCell align="left">1</StyledTableCell>
              <StyledTableCell align="left">2</StyledTableCell>
              <StyledTableCell align="left">3</StyledTableCell>
              <StyledTableCell align="left">4</StyledTableCell>
              <StyledTableCell align="left">5</StyledTableCell>
              <StyledTableCell align="left">6</StyledTableCell>
              <StyledTableCell align="left">7</StyledTableCell>
              <StyledTableCell align="left">8</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.person1}</StyledTableCell>
                <StyledTableCell>{row.person2}</StyledTableCell>
                <StyledTableCell>{row.person3}</StyledTableCell>
                <StyledTableCell>{row.person4}</StyledTableCell>
                <StyledTableCell>{row.person5}</StyledTableCell>
                <StyledTableCell>{row.person6}</StyledTableCell>
                <StyledTableCell>{row.person7}</StyledTableCell>
                <StyledTableCell>{row.person8}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
