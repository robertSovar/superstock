import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../utils/Button/Button";
import { editEquipments } from "../../services/api";

type FormFields = {
  name: string;
  quantity: number;
  type: string;
  image?: string;
  status: string;
  purchaseDate: string;
};

interface EditEquipmentFormProps {
  equipment: {
    _id: string;
    name: string;
    quantity: number;
    type: string;
    addedDate: string;
    status: string;
    purchasedDate: string;
  };
  onClose: () => void;
  onUpdate: () => void;
}

const EditEquipmentForm: React.FC<EditEquipmentFormProps> = ({
  equipment,
  onClose,
  onUpdate,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormFields>();

  // Populează automat câmpurile când formularul se încarcă
  useEffect(() => {
    if (equipment) {
      reset({
        name: equipment.name,
        quantity: equipment.quantity,
        type: equipment.type,
      });
    }
  }, [equipment, reset]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await editEquipments(equipment._id, data);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Eroare la editare:", error);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-bold">Edit equipment</h1>

      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Equipment name"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("quantity", { required: "Quantity is required" })}
        type="number"
        placeholder="Quantity"
      />
      {errors.quantity && (
        <p className="text-red-500">{errors.quantity.message}</p>
      )}

      <input
        {...register("type", { required: "Type is required" })}
        type="text"
        placeholder="Type"
      />
      {errors.type && <p className="text-red-500">{errors.type.message}</p>}

      <Button disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default EditEquipmentForm;
