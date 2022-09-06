import axios from 'axios'

export default class FuelTypeService {
    getFuelTypes() {
        return axios.get("https://localhost:7056/api/FuelTypes/GetAll");
    }
}