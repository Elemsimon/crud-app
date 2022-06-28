import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addAgenda } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddAgenda = () => {
    const [agenda, setAgenda] = useState(initialValue);
    const { title, date, time, detail } = agenda;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setAgenda({...agenda, [e.target.name]: e.target.value})
    }

    const addAgendaDetails = async() => {
        await addAgenda(agenda);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add Agenda</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" type="text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date' value={date} id="my-input" type="date" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='time' value={time} id="my-input" type="time"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Detail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='detail' value={detail} id="my-input" type="text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addAgendaDetails()}>Add Agenda</Button>
            </FormControl>
        </Container>
    )
}

export default AddAgenda;