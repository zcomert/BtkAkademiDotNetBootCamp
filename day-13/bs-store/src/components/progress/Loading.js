import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <Box className={styles.loading}>
      <CircularProgress />
    </Box>
  );
}

