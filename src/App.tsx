import { fetchEquipments } from "./services/api";
import { useEffect, useState } from "react";

interface Equipment {
  _id: number;
  name: string;
  quantity: number;
  type: string;
  image: string;
  addedDate: Date;
  status: string;
  purchasedDate: Date;
}

function App() {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadEquipments = async () => {
      try {
        const data = await fetchEquipments();
        setEquipments(data);
        console.log("Equipments fetched successfully:", data); // Debugging in console
      } catch (error) {
        console.error("Error fetching equipments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEquipments();
  }, []);
  return (
    <>
      <div>App</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {equipments.map((equipment) => (
            <li key={equipment._id}>
              {equipment.name} ({equipment.type})
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
