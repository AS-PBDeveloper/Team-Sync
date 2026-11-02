import { UserPlus } from "lucide-react";

const FormActions = () => {
  return (
    <div className="flex items-center justify-end gap-5 mt-10">
      <button
        type="button"
        className="px-8 h-16 rounded-2xl border border-(--border-color)"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="px-8 h-16 rounded-2xl bg-(--primary) text-white flex items-center gap-3"
      >
        <UserPlus size={20} />
        Create Employee
      </button>
    </div>
  );
};

export default FormActions;
