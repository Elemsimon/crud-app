import { useState, useEffect } from 'react';

import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getAgendas, deleteAgenda } from '../Service/api';
import { Link } from 'react-router-dom';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

const AllAgendas = () => {
    const [agendas, setAgendas] = useState([]);
    
    useEffect(() => {
        getAllAgendas();
    }, []);

    const deleteAgendaData = async (id) => {
        await deleteAgenda(id);
        getAllAgendas();
    }

    const getAllAgendas = async () => {
        let response = await getAgendas();
        setAgendas(response.data);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'time', headerName: 'Time', width: 120 },
        { field: 'detail', headerName: 'Detail', width: 350 },
        { field: 'action', 
        headerName: 'Action', 
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${params.row.id}`}>Edit</Button>
                    <Button color="secondary" variant="contained" onClick={() => deleteAgendaData(params.row.id)} style={{backgroundColor: '#ea0000'}}>Delete</Button> 
                </>
            )
        }
        },

    ]
    const rows = agendas.map((agenda) => ({
        id: agenda.id,
        title: agenda.title,
        date: agenda.date,
        time: agenda.time,
        detail: agenda.detail,
    }))
    return (
        <div style={{height: 500, width:"90%", margin: 40 }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            components={{
                Toolbar: CustomToolbar,
              }}
            />
        </div>
    )
}

export default AllAgendas;