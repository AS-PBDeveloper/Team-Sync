const AddEmployeeHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-(--text-muted)">
        <span>Team</span>

        <span>›</span>

        <span className="font-semibold text-(--text-primary)">
          Add New Employee
        </span>
      </div>

      <h1 className="text-6xl font-bold mt-4 text-(--text-primary)">
        Add Employee
      </h1>

      <p className="mt-3 text-xl text-(--text-secondary)">
        Configure the new team member's workspace profile and permissions.
      </p>
    </div>
  );
};

export default AddEmployeeHeader;
