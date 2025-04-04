const EditCardDropdown = () => {
  return (
    <div className="flex flex-col absolute right-[2px] ">
      <div className="flex flex-col gap-1  text-xs">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default EditCardDropdown;
