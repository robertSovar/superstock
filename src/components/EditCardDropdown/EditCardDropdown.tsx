import Modal from "../../utils/Modal/Modal";
import EditEquipmentForm from "../Forms/EditEquipmentForm";
import { useState } from "react";
import Equipments from "../../utils/EquipmentsInterface/Equipments";

const EditCardDropdown = ({
  equipment,
  onDelete,
}: {
  equipment: Equipments;
  onDelete: (id: string) => void;
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
          <span onClick={handleEditClick} className="cursor-pointer">
            Edit
          </span>
          <span onClick={handleDeleteClick} className="cursor-pointer">
            Delete
          </span>
        </div>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <EditEquipmentForm
            equipment={equipment}
            onClose={() => setIsOpen(false)}
            onUpdate={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default EditCardDropdown;
