import { Route, Routes } from "react-router-dom";
import PaymentTestPage from "../page/PaymentTestPage";
import PaymentAutoRedirectPage from "../page/PaymentAutoRedirectPage";

const PaymentRoutes = () => {
  return (
    <Routes>
      <Route path="test" element={<PaymentTestPage />} />
      <Route path="auto" element={<PaymentAutoRedirectPage />} />
    </Routes>
  )
}

export default PaymentRoutes;