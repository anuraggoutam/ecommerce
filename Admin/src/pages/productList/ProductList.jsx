import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem flex items-center">
            <img
              className="productListImg w-8 h-8 rounded-[50%] object-cover mr-2"
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit border-none rounded-xl py-1 px-2 bg-teal-500 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete bg-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList flex-[10]">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
