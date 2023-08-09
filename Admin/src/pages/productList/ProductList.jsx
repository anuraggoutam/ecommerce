import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getProducts, deleteProduct } from '../../redux/product/productRedux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
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
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'Instock', headerName: 'Stock', width: 200 },

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
            <Link to={'/product/' + params.row._id}>
              <button className="productListEdit border-none rounded-xl py-1 px-2 bg-teal-500 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete bg-red-600 cursor-pointer text-gray-200 rounded-md"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList flex-[10]">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
