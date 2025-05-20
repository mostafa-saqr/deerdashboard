import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialData = [
  { name: 'الأحد', value: 120 },
  { name: 'الاثنين', value: 180 },
  { name: 'الثلاثاء', value: 110 },
  { name: 'الأربعاء', value: 140 },
  { name: 'الخميس', value: 160 },
  { name: 'الجمعة', value: 150 },
  { name: 'السبت', value: 200 },
];

function getRandomData() {
  return initialData.map(d => ({ ...d, value: Math.floor(80 + Math.random() * 150) }));
}

const Chart1: React.FC = () => {
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
        <Box sx={{ width: 18, height: 18, borderRadius: '50%', border: '4px solid #4caf50', mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          متوسط معالجة المكالمات وإجمالي المكالمات يوميا (اخر 7 أيام)
        </Typography>
      </Box>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4caf50" strokeWidth={3} dot={false} isAnimationActive={true} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Chart1; 