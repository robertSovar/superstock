import { CiBoxList } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

function DashboardPage() {
  return (
    <section>
      <div className="flex justify-center items-center w-screen h-screen text-xl">
        <ul className="flex flex-col gap-16 shrink md:flex-col md:gap-15 md:pt-6 md:px-6 md:height-full md:w-30 md:bg-red-100 md:min-h-screen lg:bg-blue-50 ">
          <li className="flex gap-4 cursor-pointer">
            {" "}
            {<CiBoxList />}Equipments
          </li>
          <li className="flex gap-4 cursor-pointer">{<FaWpforms />}Orders</li>
          <li className="flex gap-4 cursor-pointer">
            {<LiaFileInvoiceSolid />}Invoices
          </li>
          <li className="flex gap-4 cursor-pointer">{<LuUsers />}Users</li>
        </ul>
      </div>
      <div className="hidden md:block">Other content</div>
    </section>
  );
}

export default DashboardPage;
