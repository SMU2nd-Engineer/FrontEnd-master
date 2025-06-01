import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderMenu } from "./page/header/Header";
import UserRoutes from "@user/routes/UserRoutes";
import MyPageRoutes from "@mypage/routes/MyPageRoutes";
import ChatPage from "./domain/chat/page/ChatPage";
import BodyComponent from "./components/BodyComponent";
import ProductsRoutes from "./domain/products/routes/ProductsRoutes";
import PaymentRoutes from "./domain/payment/routes/PaymentRoutes";
import BoardRoutes from "./domain/board/routes/BoardRoutes";
import SearchAllPage from "./domain/search/page/SearchAllPage";
// import "./style/App.css";
import TicketPages from "./domain/ticket/page/ticketPage";
import Footer from "./page/footer/Footer";
import ScrollToTop from "../src/utils/ScrollToTop";

function App() {
  return (
    <div className="app-main">
      <HeaderMenu />
      <BodyComponent>
        {/* 화면 맨 위로 올리기 */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/mypage/*" element={<MyPageRoutes />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/product/*" element={<ProductsRoutes />} />
          <Route path="/payment/*" element={<PaymentRoutes />} />
          <Route path="/board/*" element={<BoardRoutes />} />
          <Route path="/ticket/*" element={<TicketPages />} />
          <Route path="/total/*" element={<SearchAllPage />} />
        </Routes>
      </BodyComponent>
      <Footer />
    </div>
  );
}

export default App;
