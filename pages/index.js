import React from 'react';
import {Grid , Typography}from '@material-ui/core';
import {makeSyles, useTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import theme from '../src/ui/Theme';

const useStyles = makeStyles(theme => ({

}))

export default function ProjetManager() {
  return (
    <Grid container direction='column'>
    <Grid item>
    <Typography variant='h1'>Projects</Typography>
    </Grid>
    </Grid>
  );
};

