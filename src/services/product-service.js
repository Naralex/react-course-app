import { post } from '../components/data/crud'

class ProductService {
    constructor(){
        this.baseUrl = 'http://localhost:5000/auth';
        this.createUrl = `${this.baseUrl}/create`;
    }

    create(payload){
        return post(this.createUrl, payload);
    }
}

export default ProductService;