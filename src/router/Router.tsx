import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import WorkInProgressPage from "../pages/WorkInProgressPage/WorkInProgressPage";

export default function Router() {
  return (
    <Routes>  
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/find-new" element={<WorkInProgressPage />} />
      <Route path="/lists" element={<WorkInProgressPage />} />
      <Route path="/templates" element={<WorkInProgressPage />} />
      <Route path="/sequences" element={<WorkInProgressPage />} />
      <Route path="/tasks" element={<WorkInProgressPage />} />
      <Route path="/inbox" element={<WorkInProgressPage />} />
      <Route path="/deals" element={<WorkInProgressPage />} />
      <Route path="/analytics" element={<WorkInProgressPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}