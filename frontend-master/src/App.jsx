import { Routes, Route } from "react-router-dom";
import UserRoutes from "@user/routes/UserRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<UserRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
