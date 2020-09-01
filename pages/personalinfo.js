import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';


import TimelapseOutlinedIcon from '@material-ui/icons/TimelapseOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PersonalInfo() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TimelapseOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Class of 2023" secondary="Class" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WcOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Male" secondary="Gender" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MenuBookOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Computer Science" secondary="(Intended) Concentration" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wigglesworth" secondary="Freshman Dorm" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationCityOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Eliot" secondary="Dream House" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GroupAddOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="N/A" secondary="Blocking Status" />
      </ListItem>
    </List>
  );
}
