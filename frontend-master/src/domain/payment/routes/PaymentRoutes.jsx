import { Route, Routes } from "react-router-dom";
import PaymentTestPage from "../page/PaymentTestPage";
import PaymentSuccessPage from "../page/PaymentSuccessPage";
import PaymentCancelPage from "../page/PaymentCancelPage";
import PaymentFailPage from "../page/PaymentFailPage";
import PaymentPage from "../page/PaymentPage";
import TradeType from "../page/TradeType";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="/:idx" element={<PaymentPage />} />
      <Route path="test" element={<PaymentTestPage />} />
      <Route path="success/:idx" element={<PaymentSuccessPage />} />
      <Route path="cancel/:idx" element={<PaymentCancelPage />} />
      <Route path="fail/:idx" element={<PaymentFailPage />} />
      <Route path="trade/:idx" element={<TradeType />} />
    </Routes>
  )
}

export default PaymentRoutes;