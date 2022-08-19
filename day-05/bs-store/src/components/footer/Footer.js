import React from 'react'
import { Grid, Paper } from '@mui/material'
import styles from "./style.module.css";

export default function Footer() {
  return (
    <Grid container spacing={3} className={styles.footer} >
        <Grid item xs={12} md={3}>
            
                <img 
               
                alt="BTK Akademi" src='https://assets-btkakademi-gov-tr.akamaized.net/api/service/v1/public/51/assets/dm_logo.png?ts=1645167484961'></img>
            
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
