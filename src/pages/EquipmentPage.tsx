import { useEffect, useState } from "react";
import { fetchEquipments } from "../services/api";

function EquipmentPage() {
  interface Equipments {
    id: number;
    name: string;
    quantity: number;
    type: string;
    addedDate: string;
  }

  const [equipments, setEquipments] = useState<Equipments[]>([]);

  useEffect(() => {
    fetchEquipments()
      .then((data) => setEquipments(data))
      .catch((error) =>
        console.error("There was an error in fetching your data", error)
      );
  }, []);

  return (
    <div className="hidden md:flex">
      <h1 className="m-[15px]">Equipment Page</h1>

      {equipments.length > 0 ? (
        equipments.map((equipment, index) => (
          <div key={index} className="border p-4 mb-2 rounded bg-gray-100">
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
  );
}

export default EquipmentPage;
