import React, {useState} from 'react';
import cx from 'clsx';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Demo from './demo';
import { Link } from 'react-router-dom';

const useButtonStyles = makeStyles(() => ({
  root: {
    fontFamily: "'Kanit', san-serif",
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    '&:hover': {
      backgroundColor: blueGrey[50],
    },
  },
  contained: {
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: blueGrey[50],
    color: blueGrey[700],
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
  containedPrimary: {
    transition:
      '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#ffbd80',
    color: blueGrey[900],
    '&:hover': {
      backgroundColor: '#FF9A3E',
    },
  },
}));

const useStyles = makeStyles(() => ({
  card: {
    border: '1px solid',
    borderColor: '#cfd8dc',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  titleFont: {
    fontFamily: "'Kanit', san-serif",
    color: '#37474f',
  },
  header: {
    margin: 40,
    textAlign: 'center',
    fontSize: '1.25rem',
    letterSpacing: '1px',
  },
  ribbon: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.87)',
    letterSpacing: 1,
  },
}));

function Card(props) {
  const styles = useStyles();
  const btnStyles = useButtonStyles();
  const [value, setValue] = useState('');
  const cardName = props.cardName;

 /* const handleChange =(event) =>{
      setValue(event.target.value)
  }*/
   function handleTakePhoto() {
      console.log("Hello");
      return(
    <Demo />
      );
    
  }
  return (
    <>
      <Box maxWidth={500} maxHeight={700}>
        <Column p={0} gap={3} className={styles.card}>
            <Item>
                <h2></h2>
            </Item>
          <Item
            py={1}
            bgcolor={'rgb(255, 189, 128)'}
            className={cx(styles.titleFont, styles.ribbon)}
          >
              {cardName}
          </Item>
          <Item>
            <Box px={1} mt={1} className={cx(styles.titleFont)} border={blueGrey}>
            <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-field">Field</InputLabel>
          <OutlinedInput
            id="outlined-adornment-field"
            type={ 'text' }
            //onChange={handleChange('')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                onClick={() => window.location.replace('http://localhost:3000/takephoto')}
                  edge="end"
                >
                  <CameraAltIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          
            </Box>
          </Item>
          <Row wrap gap={1} px={2} pb={2}>
            <Item grow>
              <Button
                classes={btnStyles}
                variant={'contained'}
                color={'primary'}
                fullWidth
              >
               Skip
              </Button>
            </Item>
            <Item grow>
              <Button classes={btnStyles} variant={'contained'} fullWidth>
                Enter
              </Button>
            </Item>
          </Row>
        </Column>
      </Box>
    </>
  );
};
export default Card;