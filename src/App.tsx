import { Routes, Route } from "react-router-dom";
import EquipmentPage from "./pages/EquipmentPage";
import OrderPage from "./pages/OrderPage";
import DashboardPage from "./pages/DashboardPage";
import InvoicePage from "./pages/InvoicePage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/equipments" element={<EquipmentPage />} />
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
