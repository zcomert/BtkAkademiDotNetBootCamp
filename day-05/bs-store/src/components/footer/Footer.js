import React from 'react'
import { Grid, Paper } from '@mui/material'

export default function Footer() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
            <Paper elevation={5}>1</Paper>
        </Grid>

        <Grid item xs={12} md={3}>
            <Paper elevation={5}>2</Paper>
        </Grid>

        <Grid item xs={12} md={3}>
            <Paper elevation={5}>3</Paper>
        </Grid>

        <Grid item xs={12} md={3}>
            <Paper elevation={5}>4</Paper>
        </Grid>
    </Grid>
  )
}
