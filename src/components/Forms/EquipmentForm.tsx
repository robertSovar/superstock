import Button from "../../utils/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { addEquipment } from "../../services/api";

type FormFields = {
  name: string;
  quantity: number;
  type: string;
  image?: string;
  status: string;
  purchaseDate: string;
};

interface EquipmentFormProps {
  onAddEqupiment: () => void;
}

const EquipmentForm: React.FC<EquipmentFormProps> = ({ onAddEqupiment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      type: "Echipament terminal",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await addEquipment(data);
    onAddEqupiment();
    reset();
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-bold">Add equipment</h1>
      <p>Enter equipment details</p>

      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Equipment name"
      />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}

      <input
        {...register("quantity", { required: "Quantity is required" })}
        type="text"
        placeholder="Quantity"
      />
      {errors.quantity && (
        <div className="text-red-500">{errors.quantity.message}</div>
      )}

      <div className="flex gap-4">
        {["Echipament terminal", "Echipament PC", "Echipament aparate"].map(
          (type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                {...register("type", { required: true })}
                type="radio"
                value={type}
                className="cursor-pointer"
              />
              {type}
            </label>
          )
        )}
      </div>

      <Button disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Add Equipment"}
      </Button>
    </form>
  );
};

export default EquipmentForm;
