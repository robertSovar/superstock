const EditCardDropdown = () => {
  return (
    <div className="flex flex-col absolute right-[2px] ">
      <ul className="flex flex-col gap-1  text-xs">
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default EditCardDropdown;
