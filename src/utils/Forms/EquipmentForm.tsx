import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormFields = {
  name: string;
  quantity: number;
  type: string;
};

const EquipmentForm = () => {
  const form = useForm();
  const [selectedType, setSelectedType] = useState<string>(
    "Echipament terminal"
  );

  return (
    <form className="flex flex-col gap-8">
      <h1 className="text-xl font-bold">Add equipment</h1>
      <p>Enter equipment details</p>
      <input type="text" placeholder="Equipment name" />
      <input type="text" placeholder="Quantity" />
      <div className="flex gap-4">
        {["Echipament terminal", "Echipament PC", "Echipament aparate"].map(
          (type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="equipmentType"
                value={type}
                checked={selectedType === type}
                onChange={(e) => setSelectedType(e.target.value)}
                className="cursor-pointer"
              />
              {type}
            </label>
          )
        )}
      </div>
      <Button>Add Equipment</Button>
    </form>
  );
};

export default EquipmentForm;
