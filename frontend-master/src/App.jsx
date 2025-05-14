
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderMenu } from "./common/ui/header/Header";
import UserRoutes from "@user/routes/UserRoutes";
import MyPageRoutes from "@mypage/routes/MyPageRoutes";
import ChatPage from "./domain/chat/page/ChatPage";
import ProductListPage from "./domain/products/ProductsListPage";
import ProductDetail from "./domain/products/components/ProductDetail";
import ProductUpload from "./domain/products/components/ProductUpload";

function App() {
  return (
    <div>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/mypage/*" element={<MyPageRoutes />} />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="/product/list" element={<ProductListPage />} />
        <Route path="/product/detail/:idx" element={<ProductDetail />} />
        <Route path="/product/upload" element={<ProductUpload />} />
      </Routes>
    </div>
  );
}

export default App;
