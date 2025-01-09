import { Routes, Route } from "react-router-dom";
import EquipmentPage from "./pages/equipmentPage";
import OrderPage from "./pages/orderPage";
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
