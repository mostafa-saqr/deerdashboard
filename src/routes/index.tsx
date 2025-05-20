import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const DashboardContent = lazy(() => import('../pages/DashboardContent'));
const ReportPage = lazy(() => import('../pages/ReportPage'));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<DashboardContent />} />
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes; 