"use client";

import { useState } from "react";
import styles from "./DataTable.module.css";

type Column = {
  key: string;
  label: string;
};

type Row = {
  [key: string]: string | number;
};

type DataTableProps = {
  columns: Column[];
  rows: Row[];
};

export default function DataTable({
  columns,
  rows,
}: DataTableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortKey) return 0;

    const valueA = a[sortKey];
    const valueB = b[sortKey];

    const numberA = parseFloat(
      String(valueA).replace(",", ".").replace(/[^\d.-]/g, "")
    );

    const numberB = parseFloat(
      String(valueB).replace(",", ".").replace(/[^\d.-]/g, "")
    );

    if (!isNaN(numberA) && !isNaN(numberB)) {
      return sortDirection === "asc"
        ? numberA - numberB
        : numberB - numberA;
    }

    return sortDirection === "asc"
      ? String(valueA).localeCompare(String(valueB), "bg")
      : String(valueB).localeCompare(String(valueA), "bg");
  });

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                className={styles.headerCell}
              >
                <span>{column.label}</span>

                {sortKey === column.key && (
                  <span className={styles.sortIcon}>
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index} className={styles.row}>
              {columns.map((column) => (
                <td key={column.key}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}