import { CiBoxList } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="flex h-screen ">
      <aside className="w-screen h-screen flex justify-center items-center text-center text-sm md:w-[195px] md:justify-start md:text-xl ">
        <ul className="flex flex-col gap-16 shrink md:flex-col md:gap-16  md:pt-6 md:px-6 md:h-full md:w-30 md:bg-customGreen md:min-h-screen ">
          <NavLink
            to="/equipments"
            className={({ isActive }) => (isActive ? "text-customOrange" : "")}
          >
            <li className="flex gap-2 items-center cursor-pointer">
              {<CiBoxList />}
              Equipments
            </li>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "text-customOrange" : "")}
          >
            <li className="flex gap-2 items-center  cursor-pointer">
              {<FaWpforms />}
              Orders
            </li>
          </NavLink>
          <NavLink
            to="/invoices"
            className={({ isActive }) => (isActive ? "text-customOrange" : "")}
          >
            <li className="flex gap-2 items-center  cursor-pointer">
              {<LiaFileInvoiceSolid />}
              Invoices
            </li>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "text-customOrange" : "")}
          >
            <li className="flex gap-2 items-center cursor-pointer">
              {<LuUsers />}
              Users
            </li>
          </NavLink>
        </ul>
      </aside>
      <main className="flex-1 w-screen h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardPage;
