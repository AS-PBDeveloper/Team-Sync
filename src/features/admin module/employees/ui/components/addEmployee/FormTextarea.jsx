const FormTextarea = ({ label, placeholder, register, name }) => {
  return (
    <div>
      <label className="block mb-3 text-sm font-semibold text-(--text-secondary)">
        {label}
      </label>

      <textarea
        rows={5}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-2xl border border-(--border-color) bg-(--bg-main) px-5 py-4 outline-none resize-none"
      />
    </div>
  );
};

export default FormTextarea;
