import axios from 'axios'

export default class BrandService {
    getBrands() {
        return axios.get("https://localhost:7056/api/Brands/GetAll");
    }
}