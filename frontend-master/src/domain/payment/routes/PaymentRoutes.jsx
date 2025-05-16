import { Route, Routes } from "react-router-dom";
import PaymentTestPage from "../page/PaymentTestPage";
import PaymentAutoRedirectPage from "../page/PaymentAutoRedirectPage";
import PaymentSuccessPage from "../page/PaymentSuccessPage";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<PaymentTestPage />} />
      <Route path="/auto" element={<PaymentAutoRedirectPage />} />
      <Route path="/success" element={<PaymentSuccessPage />} />
    </Routes>
  )
}

export default PaymentRoutes;