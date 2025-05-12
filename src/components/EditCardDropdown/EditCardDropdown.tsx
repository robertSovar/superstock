import Modal from "../../utils/Modal/Modal";
import EditEquipmentForm from "../Forms/EditEquipmentForm";
import { useState } from "react";

interface Equipments {
  _id: number;
  name: string;
  quantity: number;
  type: string;
  addedDate: string;
  status: string;
  purchasedDate: string;
}

const EditCardDropdown = ({
  equipment,
  onDelete,
}: {
  equipment: Equipments;
  onDelete: (id: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleDeleteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();

    onDelete(equipment._id);
  };

  return (
    <>
      <div className="flex flex-col absolute right-[2px] ">
        <div className="flex flex-col gap-1  text-xs">
          <span onClick={handleEditClick}>Edit</span>
          <span onClick={handleDeleteClick}>Delete</span>
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
