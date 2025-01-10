import { CiBoxList } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

function DashboardPage() {
  return (
    <section className="h-full flex min-h-screen w-screen">
      <div>
        <ul className="flex-col gap-15 pt-6 px-6 height-full w-30 bg-red-100 min-h-screen ">
          <li className="flex "> {<CiBoxList />}Equipments</li>
          <li className="flex">{<FaWpforms />}Orders</li>
          <li className="flex">{<LiaFileInvoiceSolid />}Invoices</li>
          <li className="flex">{<LuUsers />}Users</li>
        </ul>
      </div>
      <div className="border "></div>
    </section>
  );
}

export default DashboardPage;
