import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Card from './card';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function renderRow(props) {
  const index  = props;

  return (
    <Card/>
  );
}



export default function AlignItemsList() {
  const classes = useStyles();
  const val = ['milege','gas','speed']

  return (
    <div className={classes.root}>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <React.Fragment>
              <Card cardName ={val[0]} />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <React.Fragment>
              <Card cardName ={val[1]} />
            </React.Fragment>
          }
        />
      </ListItem>    
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <React.Fragment>
              <Card cardName ={val[2]} />
            </React.Fragment>
          }
        />
      </ListItem>    
      <Divider variant="inset" component="li" />
    </List>
   
    </div>
    
  );
}
