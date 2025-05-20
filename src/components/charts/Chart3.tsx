import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, FormControl, Select, MenuItem } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialData = [
  { name: 'بحرين', value: 10 },
  { name: 'لبنان', value: 12 },
  { name: 'الأردن', value: 15 },
  { name: 'سوريا', value: 18 },
  { name: 'تونس', value: 20 },
  { name: 'بغداد', value: 22 },
  { name: 'السعودية', value: 25 },
];

function getRandomData() {
  return initialData.map(d => ({ ...d, value: Math.floor(5 + Math.random() * 25) }));
}

const Chart3: React.FC = () => {

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getRandomData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ p: 2, height: 340, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          أقل الأشخاص مكالمات
        </Typography>
      </Box>
      <FormControl size="small" sx={{ mb: 1, minWidth: 120 }}>
   
      </FormControl>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3f51b5" isAnimationActive={true} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Chart3; 