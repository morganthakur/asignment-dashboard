import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../api/axios";
import { products } from "../../interface/interface";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,
  },
  {
    field: "website",
    headerName: "Website",
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Main = () => {
  const [products, setProducts] = useState<products[]>([]);

  const getProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        // paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
};

export default Main;
