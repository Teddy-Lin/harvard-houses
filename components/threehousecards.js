import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HouseCard from './housecard.js';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingTop: "50px",
    paddingBottom: "50px",
  }
});

export default function ThreeHouseCards()  {
  const classes = useStyles();
  return (
    <Grid container spacing={6} className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={4}>
        <HouseCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <HouseCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <HouseCard/>
      </Grid>
    </Grid>
    )
  }
