import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Paper
} from '@material-ui/core';
import { makeSyles, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import theme from '../src/ui/Theme';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(theme => ({}));

function createData(
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total
) {
  return { name, date, service, features, complexity, platforms, users, total };
}

export default function ProjetManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);
  const [rows, setRows] = useState([
    createData(
      'Zachary Reece',
      '11/2/19',
      'Website',
      'E-commerce',
      'N/A',
      'N/A',
      'N/A',
      '$1500'
    ),
    createData(
      'Bill Gates',
      '11/2/19',
      'Custom Software',
      'GPS, Push Notifications, Users/Authentication',
      'Medium',
      'Web Application',
      '0-10',
      '$1600'
    ),
    createData(
      'Steve Jobs',
      '2/14/19',
      'Custom Software',
      'Photo/Video, File Transfer, Users/Authentication',
      'Low',
      'Web Application',
      '10-100',
      '$1250'
    )
  ]);

  return (
    <Grid container direction='column'>
      <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
        <Typography variant='h1'>Projects</Typography>
      </Grid>

      <Grid item>
        <TextField
          placeholder='Search project details ro create a new entry'
          style={{ width: '35em', marginLeft: '5em' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <AddIcon color='primary' style={{ fontSize: 30 }} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item style={{ marginLeft: '5em', marginTop: '2em' }}>
        <FormGroup row>
          <FormControlLabel
            style={{ marginRight: '5em' }}
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
          <FormControlLabel
            style={{ marginRight: '5em' }}
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
          <FormControlLabel
            style={{ marginRight: '5em' }}
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
          <FormControlLabel
            style={{ marginRight: '5em' }}
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
      <Grid item container justify='flex-end'>
        <Grid item style={{ marginRight: 75 }}>
          <FilterListIcon color='secondary' style={{ fontSize: 50 }} />
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: '5em' }}>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Date</TableCell>
                <TableCell align='center'>Service</TableCell>
                <TableCell align='center'>Features</TableCell>
                <TableCell align='center'>Complexity</TableCell>
                <TableCell align='center'>Platforms</TableCell>
                <TableCell align='center'>Users</TableCell>
                <TableCell align='center'>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align='center'>{row.name}</TableCell>
                  <TableCell align='center'>{row.date}</TableCell>
                  <TableCell align='center'>{row.service}</TableCell>
                  <TableCell align='center'>{row.features}</TableCell>
                  <TableCell align='center'>{row.platforms}</TableCell>
                  <TableCell align='center'>{row.users}</TableCell>
                  <TableCell align='center'>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
