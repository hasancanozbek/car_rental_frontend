import axios from 'axios'

export default class GearTypeService {
    getGearTypes() {
        return axios.get("https://localhost:7056/api/GearTypes/GetAll");
    }
}