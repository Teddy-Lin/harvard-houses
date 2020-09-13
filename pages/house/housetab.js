import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HouseVideo from './housevideo.js';
import HouseInfo from './houseinfo.js';
import HouseInstagram from './houseinstagram.js';
import CommentBox from './../comments/index.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function HouseTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant = "fullWidth"
          fullWidth={true}
        >
          <Tab label="Information"/>
          <Tab label="Comments"/>
          <Tab label="Statistics"/>
          <Tab label="Images"/>
          <Tab label="Videos"/>
          <Tab label="Instagram"/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <HouseInfo/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CommentBox/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <HouseVideo/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <HouseInstagram/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}


//
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
//
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });
//
// export default function HouseTab() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         // variant = "fullWidth"
//         fullWidth={true}
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="inherit"
//         centered
//       >
//         <Tab label="Information"/>
//         <Tab label="Comments"/>
//         <Tab label="Photos"/>
//         <Tab label="Videos"/>
//       </Tabs>
//     </Paper>
//   );
// }
//
