import { deleteEquipment, fetchEquipments } from "../../services/api";
import Modal from "../../utils/Modal/Modal";
import EditEquipmentForm from "../Forms/EditEquipmentForm";
import { useState, useEffect } from "react";

const EditCardDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface Equipments {
    _id: number;
    name: string;
    quantity: number;
    type: string;
    addedDate: string;
    status: string;
    purchasedDate: string;
  }

  const [equipments, setEquipments] = useState<Equipments[]>([]);

  useEffect(() => {
    fetchEquipments().then((data) => setEquipments(data));
  }, []);

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleDeleteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (equipments.length === 0) return;
    const equipmentId = equipments[0]._id;
    console.log(equipmentId);

    try {
      await deleteEquipment(equipmentId);

      setEquipments((prevEquipments) =>
        prevEquipments.filter((equipment) => equipment._id !== equipmentId)
      );
    } catch (error) {
      console.error("There was an error in deleting your data", error);
    }
  };

  return (
    <>
      <div className="flex flex-col absolute right-[2px] ">
        <div className="flex flex-col gap-1  text-xs">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <EditEquipmentForm />
        </Modal>
      )}
    </>
  );
};

export default EditCardDropdown;
