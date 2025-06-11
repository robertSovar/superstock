import { useClickOutside } from "../../utils/UseClickOutsideHook/UseClickOutsideHook";
import Equipments from "../../utils/EquipmentsInterface/Equipments";

const EditCardDropdown = ({
  equipment,
  onDelete,
  onEdit,
  onClose,
}: {
  equipment: Equipments;
  onDelete: (id: string) => void;
  onEdit: () => void;
  onClose: () => void;
}) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    onClose();
  });

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(equipment._id);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col absolute right-[2px] bg-white p-2 rounded shadow z-50"
    >
      <div className="flex flex-col gap-1 text-xs">
        <span onClick={handleEditClick} className="cursor-pointer">
          Edit
        </span>
        <span onClick={handleDeleteClick} className="cursor-pointer">
          Delete
        </span>
      </div>
    </div>
  );
};

export default EditCardDropdown;
