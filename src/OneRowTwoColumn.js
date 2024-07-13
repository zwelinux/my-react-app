import React from 'react';
import { Grid } from '@mui/material';
import './styles.css'
import MediaCard from './Card';

const OneRowTwoColumns = () => {
  return (
    <div className='container'>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={3} md={6}>

                <MediaCard />

            </Grid>
            <Grid item xs={12} lg={3} md={6}>

                <MediaCard />

            </Grid>
            <Grid item xs={12} lg={3} md={6}>

                <MediaCard />

            </Grid>
            <Grid item xs={12} lg={3} md={6}>

                <MediaCard />

            </Grid>
        </Grid>
    </div>
    
  );
};

export default OneRowTwoColumns;
