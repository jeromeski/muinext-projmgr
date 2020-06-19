import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import { makeSyles, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import theme from '../src/ui/Theme';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({}));

export default function ProjetManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);

  return (
    <Grid container direction='column'>
      <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
        <Typography variant='h1'>Projects</Typography>
      </Grid>
      <Grid item >
        <TextField
          placeholder='Search project details ro create a new entry'
          style={{ width: '35em', marginLeft: '5em' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <AddIcon color='primary' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item style={{marginLeft: '5em', marginTop: '2em'}}>
        <FormGroup row>
          <FormControlLabel style={{marginRight: '5em'}}
            control={
              <Switch
                checked={websiteChecked}
                color='primary'
                onChange={() => setWebsiteChecked(!websiteChecked)}
              />
            }
            label='Websites'
            labelPlacement='start'
          />
          <FormControlLabel style={{marginRight: '5em'}}
            control={
              <Switch
                checked={iOSChecked}
                color='primary'
                onChange={() => setiOSChecked(!iOSChecked)}
              />
            }
            label='iOS Apps'
            labelPlacement='start'
          />
          <FormControlLabel style={{marginRight: '5em'}}
            control={
              <Switch
                checked={androidChecked}
                color='primary'
                onChange={() => setAndroidChecked(!androidChecked)}
              />
            }
            label='Android'
            labelPlacement='start'
          />
          <FormControlLabel style={{marginRight: '5em'}}
            control={
              <Switch
                checked={softwareChecked}
                color='primary'
                onChange={() => setSoftwareChecked(!softwareChecked)}
              />
            }
            label='Software'
            labelPlacement='start'
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
}
