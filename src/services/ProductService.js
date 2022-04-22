//connect with springboot
import axios from 'axios';

const EMP_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getProducts() {
        return axios.get(EMP_URL);
    }

}

export default new ProductService()