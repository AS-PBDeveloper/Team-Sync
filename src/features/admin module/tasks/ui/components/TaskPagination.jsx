import { ChevronLeft, ChevronRight } from "lucide-react";

const TaskPagination = ({ pagination, onPageChange }) => {
  if (!pagination?.total) return null;

  const { page, totalPages, total, limit } = pagination;
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const navButton =
    "flex size-10 items-center justify-center rounded-xl border border-(--border-color) transition hover:bg-(--bg-hover) disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-(--border-color) px-5 py-4 sm:flex-row">
      <p className="text-sm text-(--text-muted)">
        Showing{" "}
        <span className="font-semibold text-(--text-primary)">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-(--text-primary)">{end}</span>{" "}
        of{" "}
        <span className="font-semibold text-(--text-primary)">
          {total}
        </span>{" "}
        tasks
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={navButton}
        >
          <ChevronLeft size={18} />
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              className={`size-10 rounded-xl text-sm font-medium transition ${
                page === pageNumber
                  ? "bg-(--tertiary) text-(--bg-surface)"
                  : "border border-(--border-color) text-(--text-primary) hover:bg-(--bg-hover)"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className={navButton}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskPagination;
