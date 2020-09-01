import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 1200,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function SizeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Blocking Group Size
      </Typography>
      <Slider
        defaultValue={4}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={8}
      />
    </div>
  );
}
