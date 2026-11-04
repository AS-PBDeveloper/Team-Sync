export const TASK_STATUSES = [
  { value: "todo", label: "To Do", column: "todo" },
  { value: "in-progress", label: "In Progress", column: "inProgress" },
  { value: "completed", label: "Completed", column: "completed" },
];

export const TASK_PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export const STATUS_STYLES = {
  todo: "bg-(--bg-card) text-(--text-secondary)",
  "in-progress": "bg-(--tertiary)/15 text-(--tertiary)",
  completed: "bg-(--success)/15 text-(--success)",
};

export const PRIORITY_STYLES = {
  low: "bg-(--success)/10 text-(--success)",
  medium: "bg-(--warning)/15 text-(--warning)",
  high: "bg-(--danger)/15 text-(--danger)",
};

export const TASK_LIST_LIMIT = 10;

export const inputClass =
  "w-full rounded-xl border border-(--border-color) bg-(--bg-main) px-4 py-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none transition focus:border-(--tertiary) focus:ring-2 focus:ring-(--tertiary)/20";

export const labelClass =
  "mb-2 block text-sm font-medium text-(--text-secondary)";
