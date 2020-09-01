import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import ChatIcon from '@material-ui/icons/Chat';

import Head from 'next/head'
import Link from 'next/link';
import Layout from '../styles/layout.js';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function HouseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised = "true">
    <CardActionArea>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            D
          </Avatar>
        }

        title="Dunster"
        subheader="River West"
      />
      <CardMedia
        className={classes.media}
        image="/dunster.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Dunster House is one of twelve undergraduate residential Houses at Harvard University.
        Built in 1930, it is one of the first two dormitories at Harvard University constructed under President
        Abbott Lawrence Lowell's House Plan and one of the seven Houses given to Harvard by Edward Harkness.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <Link href="/house"><a><VisibilityRoundedIcon /></a></Link>
        </IconButton>
      </CardActions>
      </CardActionArea>

    </Card>
  );
}
