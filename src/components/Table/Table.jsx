import React, { useEffect, useState } from "react";
import "./styles/Table.css";
import { DataGrid } from "@mui/x-data-grid";
import { alertTitleClasses } from "@mui/material";
import Details from "../Details/Details";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState({});

  const columns = [
    {
      field: "_id",
      headerName: "_id",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "cityid",
      headerName: "CityId",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "probabilityofprecip",
      headerName: "Probability of precip",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "relativehumidity",
      headerName: "Relative Humidity",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "lastreporttime",
      headerName: "Last Report Time",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
    {
      field: "llueve",
      headerName: "Llueve",
      flex: 1,
      width: 150,
      renderCell: (params) => {
        return <div>{params.value}</div>;
      },
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.datos.gob.mx/v1/condiciones-atmosfericas/"
      );

      const data = await response.json();
      const probOfPrecipt = data.results;
      const newArray = probOfPrecipt.map((item) => {
        return {
          ...item,
          llueve:
            item.probabilityofprecip > 60 || item.relativehumidity > 50
              ? "Sí"
              : "No",
        };
      });

      setTableData(newArray);
    };
    getData();
  }, []);

  const handleEvent = (params) => {
    const dataToShow = tableData.find((row) => row._id === params.row._id);
    setOpenModal(true);
    setDetails(dataToShow);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <div className="table">
      <DataGrid
        onRowClick={handleEvent}
        rows={tableData}
        columns={columns}
        pageSize={10}
        disableColumnSelector
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        getRowId={(row) => row._id}
      />
      {openModal && <Details details={details} handleClose={handleClose} />}
    </div>
  );
};

export default Table;
