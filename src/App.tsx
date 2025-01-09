import { Routes, Route } from "react-router-dom";
import EquipmentPage from "./pages/EquipmentPage";
import OrderPage from "./pages/OrderPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
    </Routes>
  );
}

export default App;
