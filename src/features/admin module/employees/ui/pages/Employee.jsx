import React from "react";
import { useEmployee } from "../../hooks/useEmployees";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import SearchFilterBar from "../components/employees/SearchFilterBar";
import EmployeeStats from "../components/employees/EmployeeStats";
import EmployeeTable from "../components/employees/EmployeeTable";

const Employee = () => {
  let {
    data,
    isPending,
    handlePageChange,
    isFetching,
    filters,
    handleSearchFilters,
  } = useEmployee();
  console.log("filters", filters);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-8">
      <div className=" mx-auto">
        {/* HEADER */}
        <EmployeeHeader />

        {/* STATS */}
        <EmployeeStats employees={data?.employees} />

        {/* TABLE SECTION */}
        <div className="mt-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden">
          <SearchFilterBar
            filters={filters}
            handleSearchFilters={handleSearchFilters}
          />

          {isFetching && <h1>Loading next page data</h1>}

          <EmployeeTable employees={data?.employees} />
        </div>
      </div>
    </div>
  );
};

export default Employee;
