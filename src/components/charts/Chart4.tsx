import React, { useState, useEffect } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generateRandomData } from '../../utils/chartData';

const Chart4: React.FC = () => {
  const [data, setData] = useState(generateRandomData().barData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData().barData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', height: '400px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>المكالمات المعالجة والغير معالجة</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="processed" name="المكالمات المعالجة" fill="#26a69a" />
          <Bar dataKey="unprocessed" name="المكالمات الغير معالجة" fill="#ec407a" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart4; 