import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayouts from "./layouts/Applayouts";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Schedules from "./pages/Schedules";
import Statistics from "./pages/Statistics";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayouts />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="community" element={<Community />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
