import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/wrestlers';

export const getWrestlers = () => axios.get(BASE_URL);
export const createWrestler = (data) => axios.post(BASE_URL, data);
export const updateWrestler = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteWrestler = (id) => axios.delete(`${BASE_URL}/${id}`);
