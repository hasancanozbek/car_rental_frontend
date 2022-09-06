import axios from 'axios'

export default class ColourService {
    getColours() {
        return axios.get("https://localhost:7056/api/Colours/GetAll");
    }
}