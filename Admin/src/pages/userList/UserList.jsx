import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser flex items-center">
            <img
              className="userListImg w-8 h-8 rounded-[50%] object-cover mr-3"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="userListEdit border-none rounded-xl py-1 px-2 bg-teal-500 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete text-red-500 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList flex-[10]">
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
