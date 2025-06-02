import { Route, Routes } from "react-router-dom";
import PaymentTestPage from "../page/PaymentTestPage";
import PaymentSuccessPage from "../page/PaymentSuccessPage";
import PaymentCancelPage from "../page/PaymentCancelPage";
import PaymentFailPage from "../page/PaymentFailPage";
import PaymentPage from "../page/PaymentPage";
import TradeType from "../page/TradeType";
import PaymentLayout from "../components/PaymentLayout";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="/:idx" element={<PaymentLayout />}>
        <Route path="info" element={<PaymentPage />} />
        <Route path="test" element={<PaymentTestPage />} />
        <Route path="success" element={<PaymentSuccessPage />} />
        <Route path="cancel" element={<PaymentCancelPage />} />
        <Route path="fail" element={<PaymentFailPage />} />
        <Route path="trade" element={<TradeType />} />
      </Route>
    </Routes>
  );
};

export default PaymentRoutes;
