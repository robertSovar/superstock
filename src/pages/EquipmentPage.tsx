import { useEffect, useState } from "react";
import { fetchEquipments } from "../services/api";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../utils/Button/Button";
import filterData from "../utils/Functions/filter";

function EquipmentPage() {
  interface Equipments {
    id: number;
    name: string;
    quantity: number;
    type: string;
    addedDate: string;
  }

  const [equipments, setEquipments] = useState<Equipments[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEquipments()
      .then((data) => setEquipments(data))
      .catch((error) =>
        console.error("There was an error in fetching your data", error)
      );
  }, []);

  const filteredEquipments = filterData(equipments, "name", searchTerm);
  return (
    <div className="hidden md:flex flex-col gap-[20px] p-10">
      <h1>Equipment Page</h1>
      <span className="flex items-center gap-[4px]">
        <input
          type="text"
          placeholder="Search equipment"
          className="w-[165px] outline-customGreen p-2"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <HiMagnifyingGlass />
      </span>

      <div className="flex flex-wrap gap-8">
        {filteredEquipments.length > 0 ? (
          filteredEquipments.map((equipment, index) => (
            <div
              key={index}
              className="w-[300px] h-[160px] border p-4 mb-2 rounded bg-gray-100"
            >
              <span>Name: {equipment.name}</span>
              <br />
              <span>Quantity: {equipment.quantity}</span>
              <br />
              <span>Type: {equipment.type}</span>
              <br />
              <span>
                Added Date: {new Date(equipment.addedDate).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p>No equipment found.</p>
        )}
      </div>
      <Button className="w-[50px]">+</Button>
    </div>
  );
}

export default EquipmentPage;
