import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "@user/routes/UserRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user/*" element={<UserRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
