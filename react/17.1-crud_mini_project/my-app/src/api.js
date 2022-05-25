import axios from 'axios';

const PeopleApi = axios.create({
    baseURL: "https://628e2640368687f3e7114abb.mockapi.io/people"
})
export default PeopleApi;