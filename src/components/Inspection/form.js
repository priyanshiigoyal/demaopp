import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import {Link, Route, Router, useRouteMatch } from 'react-router-dom'
import CardList from './cardList' ;



const useStyles = makeStyles({
  root: {
    minWidth: '80%',
    margin:20,
    position:'absolute',
    top:"30%",
    border: 'solid black'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
  },
  pos: {
    marginBottom: 12,
  },
});

 function Inspection() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { path, url } = useRouteMatch();

  return (
      <div>
    <Card className={classes.root} variant="outlined"  >  
      <CardContent className={classes.mid}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Vehicle Inspection
        </Typography>
        <Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth
            variant="contained"
            color="primary">
              <Link to={`${url}/cardlist`}>Select Form</Link></Button>
      </CardActions>
      
    </Card>
    <Route path={`${url}/cardlist`} component={CardList}>
      </Route>
    </div>
 
  );
}
export default Inspection;
