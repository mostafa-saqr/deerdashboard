import React, { useState, useEffect } from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generateRandomData } from '../../utils/chartData';

const Chart5: React.FC = () => {
  const [data, setData] = useState(generateRandomData().lineData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData().lineData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', height: '400px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>تطور المكالمات</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
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
          <Line
            type="monotone"
            dataKey="corrected"
            name="المكالمات المصححة"
            stroke="#e57373"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="international"
            name="المكالمات الدولية"
            stroke="#90caf9"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart5; 