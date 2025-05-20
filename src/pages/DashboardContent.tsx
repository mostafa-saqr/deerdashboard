import React from 'react';
import { Grid, Box } from '@mui/material';
import SummarySlider from '../components/sliders/SummarySlider';
import Chart1 from '../components/charts/Chart1';
import Chart3 from '../components/charts/Chart3';
import Chart5 from '../components/charts/Chart5';
import Chart6 from '../components/charts/Chart6';
import Chart2 from '../components/charts/Chart2';
const DashboardContent: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100%',
      pt: { xs: 2, sm: 3 },
      pb: { xs: 2, sm: 3 }
    }}>

      <Box sx={{ 
        width: '100%',
        mb: { xs: 2, sm: 3 }
      }}>
        <SummarySlider />
      </Box>
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3 }}
        sx={{ 
          width: '100%',
          m: 0
        }}
      >
        <Grid item xs={12} md={4}>
          <Chart1 />
        </Grid>
      
        <Grid item xs={12} md={4}>
          <Chart2 />
        </Grid>
        <Grid item xs={12} md={4}>
          <Chart3 />
        </Grid>
      
      
        <Grid item xs={12} md={6}>
       <Chart5 />
        </Grid>
        <Grid item xs={12} md={6}>
         <Chart6 />
        </Grid>
   
      </Grid>
    </Box>
  );
};

export default DashboardContent; 