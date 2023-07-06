import { useState } from "react";
import DataSet from "../../dataset.json";
import { TableBody } from "./tableBody";
import { TableHead } from "./tableHead";

export const Table = () => {
  const [tableData, setTableData] = useState(DataSet);

  const columns = [
    { label: "Item", accessor: "part_name", sortable: true },
    { label: "Código", accessor: "part_number", sortable: true },
    { label: "Fabricante", accessor: "manufacturer", sortable: true },
    { label: "Quantidade", accessor: "quantity_in_stock", sortable: true },
    { label: "Entrada", accessor: "date_added", sortable: true },
    { label: "Valor", accessor: "price", sortable: true },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;

        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });

      setTableData(sorted);
    }
  };

  return (
    <>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};
