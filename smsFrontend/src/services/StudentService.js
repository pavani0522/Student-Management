import axios from "axios";
const REST_API_BASE_URL='http://localhost:8060/students';

export const listStudents = () => axios.get(REST_API_BASE_URL);

export const createStudent =(student) => axios.post(REST_API_BASE_URL , student);

export const getStudent =(studentId) => axios.get(REST_API_BASE_URL + '/' + studentId);


export const editStudent =(studentId,student) => axios.put(REST_API_BASE_URL + '/' + studentId, student);

export const deleteStudent =( studentId) => axios.delete(REST_API_BASE_URL + '/' + studentId);