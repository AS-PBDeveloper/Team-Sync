import { ChevronDown } from "lucide-react";

const FormSelect = ({ label, options }) => {
  return (
    <div>
      <label className="block mb-3 text-sm font-semibold text-(--text-secondary)">
        {label}
      </label>

      <div className="relative">
        <select className="appearance-none w-full h-16 rounded-2xl border border-(--border-color) bg-(--bg-main) px-5 outline-none text-lg text-(--text-primary)">
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-(--text-muted) pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FormSelect;
