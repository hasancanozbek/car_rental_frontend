import axios from 'axios'

export default class CarService {
    getCars() {
        return axios.get("https://localhost:7056/api/Cars/GetAll");
    }
}