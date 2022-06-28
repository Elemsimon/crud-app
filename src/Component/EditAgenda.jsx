import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getAgendas, editAgenda } from '../Service/api';

const initialValue = {
    title: '',
    date: '',
    time: '',
    detail: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditAgenda = () => {
    const [agenda, setAgenda] = useState(initialValue);
    const { title, date, time, detail } = agenda;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadAgendaDetails();
    }, []);

    const loadAgendaDetails = async() => {
        const response = await getAgendas(id);
        setAgenda(response.data);
    }

    const editAgendaDetails = async() => {
        const response = await editAgenda(id, agenda);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setAgenda({...agenda, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date' value={date} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='time' value={time} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Detail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='detail' value={detail} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editAgendaDetails()}>Edit Agenda</Button>
            </FormControl>
        </Container>
    )
}

export default EditAgenda;