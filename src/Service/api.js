import axios from 'axios';

const agendasUrl = 'http://localhost:3002/users';


export const getAgendas = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${agendasUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getAgendas api ', error);
    }
}

export const addAgenda = async (agenda) => {
    return await axios.post(`${agendasUrl}`, agenda);
}

export const deleteAgenda = async (id) => {
    return await axios.delete(`${agendasUrl}/${id}`);
}

export const editAgenda = async (id, agenda) => {
    return await axios.put(`${agendasUrl}/${id}`, agenda)
}