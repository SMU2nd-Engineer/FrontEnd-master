import { Route, Routes } from "react-router-dom";
import PaymentTestPage from "../page/PaymentTestPage";
import PaymentAutoRedirectPage from "../page/PaymentAutoRedirectPage";
import PaymentSuccessPage from "../page/PaymentSuccessPage";
import PaymentCancelPage from "../page/PaymentCancelPage";
import PaymentFailPage from "../page/PaymentFailPage";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<PaymentTestPage />} />
      <Route path="/auto" element={<PaymentAutoRedirectPage />} />
      <Route path="/success" element={<PaymentSuccessPage />} />
      <Route path="/cancel" element={<PaymentCancelPage />} />
      <Route path="/fail" element={<PaymentFailPage />} />
    </Routes>
  )
}

export default PaymentRoutes;