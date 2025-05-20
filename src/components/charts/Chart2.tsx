import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, FormControl, Select, MenuItem } from '@mui/material';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialData = [
  { name: '36771', value: 10, value2: 15 },
  { name: '33991', value: 12, value2: 18 },
  { name: '54892', value: 15, value2: 20 },
  { name: '66842', value: 18, value2: 22 },
  { name: '95412', value: 20, value2: 25 },
  { name: '54648', value: 22, value2: 28 },
  { name: '22548', value: 25, value2: 30 },
];

function getRandomData() {
  return initialData.map(d => ({ ...d, value: Math.floor(5 + Math.random() * 25), value2: Math.floor(10 + Math.random() * 30) }));
}

const Chart2: React.FC = () => {
  const [emp, setEmp] = React.useState('رقم الموظف');
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
        <Box sx={{ width: 18, height: 18, borderRadius: '50%', border: '4px solid #ff9800', mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          أكثر الأشخاص مكالمات
        </Typography>
      </Box>
      <FormControl size="small" sx={{ mb: 1, minWidth: 120 }}>
        <Select value={emp} onChange={e => setEmp(e.target.value)}>
          <MenuItem value="رقم الموظف">رقم الموظف</MenuItem>
          <MenuItem value="36771">36771</MenuItem>
          <MenuItem value="33991">33991</MenuItem>
        </Select>
      </FormControl>
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#ff9800" barSize={30} isAnimationActive={true} />
          <Line type="monotone" dataKey="value2" stroke="#4caf50" strokeWidth={3} dot={false} isAnimationActive={true} />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Chart2; 