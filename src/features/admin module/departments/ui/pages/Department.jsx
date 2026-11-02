import React, { useState } from "react";
import {
  Building2,
  Users,
  UserRound,
  FileText,
  Plus,
  ChevronDown,
  Search,
  X,
  RotateCcw,
} from "lucide-react";
import { useEmployee } from "../../../employees/hooks/useEmployees";
import { useDepartment } from "../../hooks/useDepartment";
import { createDepartmentApi } from "../../api/departmentApi";
import { useNavigate } from "react-router";

const DepartmentPage = () => {
  const navigate = useNavigate();
  const { data, isPending } = useEmployee();
  const { data: departmentData } = useDepartment();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    manager: "",
    employees: [],
  });

  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const inputClass =
    "w-full rounded-xl border border-(--border-color) bg-(--bg-main) px-4 py-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none transition focus:border-(--tertiary) focus:ring-2 focus:ring-(--tertiary)/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-(--text-secondary)";

  const employees = Array.isArray(data?.employees) ? data.employees : [];
  const filteredEmployees = employees.filter((employee) => {
    const query = search.toLowerCase().trim();

    return (
      employee.name?.toLowerCase().includes(query) ||
      employee.email?.toLowerCase().includes(query)
    );
  });

  const handleEmployeeToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      employees: prev.employees.includes(id)
        ? prev.employees.filter((item) => item !== id)
        : [...prev.employees, id],
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      manager: "",
      employees: [],
    });
    setSearch("");
  };

  const selectedManager = employees.find(
    (employee) => employee._id === formData.manager,
  );

  if (isPending) return <h1>Loading employees</h1>;

  const handleDepartmentFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await createDepartmentApi(formData);
      resetForm();
      alert("Department created successfully");
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to create department. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--bg-main) p-4 text-(--text-primary) transition-colors duration-300 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-(--text-muted)">
              <span>Admin</span>
              <span>/</span>
              <span className="text-(--tertiary)">Departments</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Department Management
            </h1>

            <p className="mt-2 text-sm text-(--text-muted)">
              Create and organize your departments and team members.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-3 rounded-xl border border-(--border-color) bg-(--bg-surface) p-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-(--tertiary)/15 text-(--tertiary)">
                <Building2 size={23} />
              </div>
              <div>
                <p className="text-xs text-(--text-muted)">Departments</p>
                <p className="text-xl font-bold">
                  {(departmentData?.data?.length ?? 0)
                    .toString()
                    .padStart(2, "0")}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("/home/all-departments")}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-(--border-color) bg-(--bg-surface) p-4 text-left transition hover:bg-(--bg-hover)"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-(--tertiary)/15 text-(--tertiary)">
                <Building2 size={20} />
              </div>
              <div>
                <p className="text-xs text-(--text-muted)">
                  All Departments
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          {/* Form */}
          <section className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-surface) shadow-(--shadow-md)">
            <div className="flex items-center gap-4 border-b border-(--border-color) p-5 sm:p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-(--tertiary)/15 text-(--tertiary)">
                <Plus size={24} />
              </div>

              <div>
                <h2 className="text-lg font-semibold">Create Department</h2>
                <p className="mt-1 text-sm text-(--text-muted)">
                  Fill in the details to set up a new department.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleDepartmentFormSubmit}
              className="space-y-7 p-5 sm:p-6"
            >
              {/* Basic Details */}
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <FileText size={18} className="text-(--tertiary)" />
                  <h3 className="font-semibold">Basic Information</h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="department-name" className={labelClass}>
                      Department Name
                      <span className="ml-1 text-(--danger)">*</span>
                    </label>

                    <input
                      id="department-name"
                      type="text"
                      placeholder="e.g. Engineering"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="department-description"
                      className={labelClass}
                    >
                      Description
                    </label>

                    <textarea
                      id="department-description"
                      rows={4}
                      placeholder="Describe the department's purpose and responsibilities..."
                      maxLength={500}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className={`${inputClass} resize-y`}
                    />

                    <p className="mt-2 text-right text-xs text-(--text-muted)">
                      {formData.description.length}/500
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-(--border-color)" />

              {/* Manager */}
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <UserRound size={18} className="text-(--tertiary)" />
                  <h3 className="font-semibold">Department Manager</h3>
                </div>

                <label htmlFor="department-manager" className={labelClass}>
                  Select Manager
                  <span className="ml-1 text-(--danger)">*</span>
                </label>

                <div className="relative">
                  <select
                    id="department-manager"
                    value={formData.manager}
                    required
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        manager: e.target.value,
                      }))
                    }
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    <option value="">Choose a manager</option>
                    {employees.map((employee) => (
                      <option key={employee._id} value={employee._id}>
                        {employee.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                  />
                </div>

                {selectedManager && (
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-(--border-color) bg-(--bg-main) p-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-(--tertiary)/15 font-semibold text-(--tertiary)">
                      {selectedManager.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium">
                        {selectedManager.name}
                      </p>
                      <p className="text-xs text-(--text-muted)">
                        {selectedManager.email}
                      </p>
                    </div>

                    <span className="ml-auto rounded-full bg-(--success)/10 px-2.5 py-1 text-xs text-(--success)">
                      Manager
                    </span>
                  </div>
                )}
              </div>

              <div className="h-px bg-(--border-color)" />

              {/* Employees */}
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-(--tertiary)" />
                    <h3 className="font-semibold">Assign Employees</h3>
                  </div>

                  <span className="rounded-full bg-(--tertiary)/15 px-3 py-1 text-xs font-semibold text-(--tertiary)">
                    {formData.employees.length} selected
                  </span>
                </div>

                <div className="relative mb-4">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-muted)"
                  />
                  <input
                    type="search"
                    placeholder="Search employees..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                  {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((employee) => {
                      const selected = formData.employees.includes(
                        employee._id,
                      );

                      return (
                        <label
                          key={employee._id}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                            selected
                              ? "border-(--tertiary) bg-(--tertiary)/10"
                              : "border-(--border-color) hover:bg-(--bg-hover)"
                          }`}
                        >
                          <input
                            type="checkbox"
                            aria-label={`Assign ${employee.name} to this department`}
                            checked={selected}
                            onChange={() =>
                              handleEmployeeToggle(employee._id)
                            }
                            className="size-4 accent-(--tertiary)"
                          />

                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--bg-card) text-xs font-semibold">
                            {employee.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {employee.name}
                            </p>
                            <p className="truncate text-xs text-(--text-muted)">
                              {employee.email}
                            </p>
                          </div>

                          {selected && (
                            <span className="text-xs font-medium text-(--tertiary)">
                              Selected
                            </span>
                          )}
                        </label>
                      );
                    })
                  ) : (
                    <p className="rounded-xl border border-dashed border-(--border-color) p-4 text-center text-sm text-(--text-muted)">
                      No employees found.
                    </p>
                  )}
                </div>

                {/* Selected Employee Chips */}
                {formData.employees.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-3 text-xs font-medium text-(--text-muted)">
                      SELECTED EMPLOYEES
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {employees
                        .filter((employee) =>
                          formData.employees.includes(employee._id),
                        )
                        .map((employee) => (
                          <span
                            key={employee._id}
                            className="flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--bg-main) px-3 py-2 text-xs"
                          >
                            {employee.name}
                            <button
                              type="button"
                              aria-label={`Remove ${employee.name}`}
                              onClick={() => handleEmployeeToggle(employee._id)}
                              className="text-(--text-muted) hover:text-(--danger)"
                            >
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {submitError && (
                <p
                  role="alert"
                  className="rounded-xl border border-(--danger)/30 bg-(--danger)/10 p-3 text-sm text-(--danger)"
                >
                  {submitError}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-(--border-color) pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setSubmitError("");
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-(--border-color) px-5 py-3 text-sm font-medium transition hover:bg-(--bg-hover)"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-xl bg-(--tertiary) px-6 py-3 text-sm font-semibold text-(--primary) transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Plus size={18} />
                  {isSubmitting ? "Creating..." : "Create Department"}
                </button>
              </div>
            </form>
          </section>

          {/* Preview Sidebar */}
          <aside className="space-y-5 xl:sticky xl:top-6">
            <section className="rounded-2xl border border-(--border-color) bg-(--bg-surface) p-5 shadow-(--shadow-md)">
              <h3 className="font-semibold">Department Preview</h3>
              <p className="mt-1 text-sm text-(--text-muted)">
                Preview your department details.
              </p>

              <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-(--tertiary)/15 text-(--tertiary)">
                <Building2 size={28} />
              </div>

              <h2 className="mt-4 wrap-break-word text-xl font-bold">
                {formData.name || "Department Name"}
              </h2>

              <p className="mt-2 min-h-12 wrap-break-word text-sm leading-6 text-(--text-muted)">
                {formData.description ||
                  "Your department description will appear here."}
              </p>

              <div className="my-5 h-px bg-(--border-color)" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-(--bg-card)">
                    <UserRound size={18} className="text-(--tertiary)" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-(--text-muted)">
                      Department Manager
                    </p>
                    <p className="truncate text-sm font-medium">
                      {selectedManager?.name || "Not assigned"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-(--bg-card)">
                    <Users size={18} className="text-(--tertiary)" />
                  </div>
                  <div>
                    <p className="text-xs text-(--text-muted)">
                      Team Members
                    </p>
                    <p className="text-sm font-medium">
                      {formData.employees.length} employees
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Setup Checklist */}
            <section className="rounded-2xl border border-(--border-color) bg-(--bg-surface) p-5">
              <h3 className="font-semibold">Setup Checklist</h3>

              <div className="mt-5 space-y-4">
                {[
                  {
                    label: "Department name",
                    done: Boolean(formData.name.trim()),
                  },
                  {
                    label: "Manager assigned",
                    done: Boolean(formData.manager),
                  },
                  {
                    label: "Employees selected",
                    done: formData.employees.length > 0,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span
                      className={`flex size-5 items-center justify-center rounded-full text-xs ${
                        item.done
                          ? "bg-(--success)/15 text-(--success)"
                          : "bg-(--bg-card) text-(--text-muted)"
                      }`}
                    >
                      {item.done ? "✓" : "○"}
                    </span>
                    <span
                      className={
                        item.done
                          ? "text-(--text-primary)"
                          : "text-(--text-muted)"
                      }
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
