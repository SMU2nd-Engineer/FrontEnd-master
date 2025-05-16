import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderMenu } from "./page/header/Header";
import UserRoutes from "@user/routes/UserRoutes";
import MyPageRoutes from "@mypage/routes/MyPageRoutes";
import ChatPage from "./domain/chat/page/ChatPage";
import BodyComponent from "./components/BodyComponent";
import ProductsRoutes from "./domain/products/routes/ProductsRoutes";
import "./style/App.css"; 
import BoardRoutes from "./domain/board/routes/BoardRoutes";

function App() {
  return (
    <div className="app-main">
      <HeaderMenu />
      <BodyComponent>
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/mypage/*" element={<MyPageRoutes />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/product/*" element={<ProductsRoutes />} />
          <Route path="/board/*" element={<BoardRoutes />} />
        </Routes>
      </BodyComponent>
    </div>
  );
}

export default App;
