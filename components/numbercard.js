import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 50,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function NumberCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h2" component="h2">
            1,980
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Freshmen
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

//
//
//
// export default class NumberCard extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.data = [
//       { number: "1", text: "website", },
//       { number: "12", text: "houses", },
//       { number: "1950", text: "freshmen", },
//       { number: "infinite", text: "memories", },
//     ];
//
// }
//
//     render () {
//       return(
//         <Card className={classes.root}>
//           <CardActionArea>
//             <CardContent>
//               <Typography variant="h2" component="h2">
//                 {this.props.number}
//               </Typography>
//               <Typography className={classes.pos} color="textSecondary">
//                 {this.props.text}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       );
//     }
//
// }
//
//
