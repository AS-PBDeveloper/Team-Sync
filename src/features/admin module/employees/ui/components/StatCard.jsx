const StatCard = ({ title, value, icon, badge }) => {
  return (
    <div
      className="bg-(--bg-surface) border border-(--border-color) rounded-3xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-(--primary) flex items-center justify-center text-2xl">
          {icon}
        </div>

        <span className="text-sm font-semibold text-(--primary)">
          {badge}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-(--text-secondary)">{title}</p>

        <h1 className="text-5xl font-bold mt-2 text-(--text-primary)">
          {value}
        </h1>
      </div>
    </div>
  );
};

export default StatCard;
