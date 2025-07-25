import { useEffect, useState } from "react";
import { deleteEquipment, fetchEquipments } from "../services/api";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../utils/Button/Button";
import filterData from "../utils/Functions/filter";
import Modal from "../utils/Modal/Modal";
import EquipmentForm from "../components/Forms/EquipmentForm";
import { HiOutlineDotsVertical } from "react-icons/hi";
import EditCardDropdown from "../components/EditCardDropdown/EditCardDropdown";
import Equipments from "../utils/EquipmentsInterface/Equipments";
import EditEquipmentForm from "../components/Forms/EditEquipmentForm";

function EquipmentPage() {
  const [equipments, setEquipments] = useState<Equipments[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDropdownId, setCardDropdownId] = useState<string | null>(null);
  const [editEquipment, setEditEquipment] = useState<Equipments | null>(null);

  const toggleDropdown = (id: string) => {
    setCardDropdownId(cardDropdownId === id ? null : id);
  };

  const refreshEquipements = () => {
    setIsModalOpen(false);
    fetchEquipments()
      .then((data) => setEquipments(data))
      .catch((error) =>
        console.error("There was an error in fetching your data", error)
      );
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEquipment(id);
      setEquipments((prev) => prev.filter((eq) => eq._id !== id));
    } catch (error) {
      console.error("There was an error in deleting your data", error);
    }
  };

  useEffect(() => {
    fetchEquipments()
      .then((data) => setEquipments(data))
      .catch((error) =>
        console.error("There was an error in fetching your data", error)
      );
  }, []);

  const filteredEquipments = filterData(equipments, "name", searchTerm);

  return (
    <div className="md:flex flex-col gap-[20px] p-10">
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
          filteredEquipments.map((equipment) => (
            <div
              key={equipment._id}
              className="w-[300px] h-auto border pb-4 pt-12 pr-4 pl-4 mb-2 rounded bg-gray-100 relative"
            >
              <div
                className="absolute top-[8px] right-[8px]"
                onClick={() => toggleDropdown(equipment._id)}
              >
                <HiOutlineDotsVertical />
                {cardDropdownId === equipment._id && (
                  <EditCardDropdown
                    equipment={equipment}
                    onDelete={handleDelete}
                    onClose={() => setCardDropdownId(null)}
                    onEdit={() => {
                      setEditEquipment(equipment);
                      setCardDropdownId(null);
                    }}
                  />
                )}
              </div>
              <span>Name: {equipment.name}</span>
              <br />
              <span>Quantity: {equipment.quantity}</span>
              <br />
              <span>Type: {equipment.type}</span>
              <br />
              <span>
                Added Date:{" "}
                {new Date(Number(equipment.addedDate)).toLocaleDateString()}
              </span>
              <br />
              <span>Status: {equipment.status}</span>
            </div>
          ))
        ) : (
          <p>No equipment found.</p>
        )}
      </div>

      <Button onClick={() => setIsModalOpen(true)} className="w-[50px]">
        +
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EquipmentForm onAddEqupiment={refreshEquipements} />
      </Modal>

      {editEquipment && (
        <Modal isOpen={true} onClose={() => setEditEquipment(null)}>
          <EditEquipmentForm
            equipment={editEquipment}
            onClose={() => setEditEquipment(null)}
            onUpdate={() => {
              refreshEquipements();
              setEditEquipment(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default EquipmentPage;
