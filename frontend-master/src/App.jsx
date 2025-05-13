import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "@user/routes/UserRoutes";
import MyPageRoutes from "@mypage/routes/MyPageRoutes";
import ChatPage from "./domain/chat/page/ChatPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/mypage/*" element={<MyPageRoutes />} />
        <Route path="/chat/*" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
