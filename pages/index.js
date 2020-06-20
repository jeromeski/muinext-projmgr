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
  Paper,
  Dialog,
  DialogContent,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  service: {
    fontWeight: 300
  },
  users: {
    marginRight: 0
  },
  button: {
    color: '#fff',
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState('');
  const [service, setService] = useState('');
  const [complexity, setComplexity] = useState('');
  const [users, setUsers] = useState('');

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                <InputAdornment
                  position='end'
                  onClick={() => setDialogOpen(true)}
                  style={{ cursor: 'pointer' }}>
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
        <Dialog
          fullWidth
          maxWidth='md'
          open={dialogOpen}
          style={{ zIndex: 1302 }}
          onClose={() => setDialogOpen(false)}>
          <Grid item align='center'>
            <Typography variant='h1' gutterBottom>
              Add a new project
            </Typography>
          </Grid>
          <DialogContent>
            <Grid container justify='space-between'>
              <Grid item>
                <Grid item container direction='column' sm>
                  <Grid item>
                    <TextField
                      fullWidth
                      label='Name'
                      id='name'
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction='column'
                    style={{ marginTop: '5em' }}>
                    <Grid item>
                      <Typography variant='h4'>Service</Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label='service'
                        name='service'
                        value={service}
                        onChange={event => setService(event.target.value)}>
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value='Website'
                          label='Website'
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value='Mobile App'
                          label='Mobile App'
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value='Custom Software'
                          label='Custom Software'
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction='column'
                  sm
                  alignItems='center'
                  style={{ marginTop: 16 }}>
                  <Grid item>
                    <KeyboardDatePicker
                      format='MM/dd/yyyy'
                      value={date}
                      onChange={newDate => setDate(newDate)}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      item
                      container
                      direction='column'
                      style={{ marginTop: '5em' }}>
                      <Grid item>
                        <Typography variant='h4'>Complexity</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label='complexity'
                          name='complexity'
                          value={complexity}
                          onChange={event => setComplexity(event.target.value)}>
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Low'
                            label='Low'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='Medium'
                            label='Medium'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value='High'
                            label='High'
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction='column'
                  sm
                  alignItems='flex-end'>
                  <Grid item>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>$</InputAdornment>
                        )
                      }}
                      value={total}
                      id='total'
                      label='Total'
                      onChange={event => setTotal(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      item
                      container
                      direction='column'
                      style={{ marginTop: '5em' }}>
                      <Grid item>
                        <Typography variant='h4'>Users</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label='users'
                          name='users'
                          value={users}
                          onChange={event => setUsers(event.target.value)}>
                          <FormControlLabel
                            classes={{ label: classes.service,
                            root: classes.users }}
                            value='0-10'
                            label='0-10'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service,
                              root: classes.users }}
                            value='11-100'
                            label='11-100'
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service,
                              root: classes.users }}
                            value='100+'
                            label='100+'
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
