import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberCard from './numbercard.js'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingTop: "50px",
    paddingBottom: "50px",
  }
});

export default function FourNumberCards()  {
  const classes = useStyles();
  return (
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <NumberCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NumberCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NumberCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <NumberCard/>
        </Grid>
      </Grid>
    )
  }
