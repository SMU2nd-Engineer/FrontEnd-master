import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "@user/routes/UserRoutes";
import MyPageRoutes from "@mypage/routes/MyPageRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/mypage/*" element={<MyPageRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
