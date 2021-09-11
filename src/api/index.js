import axios from "axios";
const base = 'https://fakestoreapi.com'

export class Services {
    static async getUser(){
        const response = await axios.get(`https://fakestoreapi.com/users/1`)
        return response.data
    }
    static async getList(limit = 5) {
        const response = await axios.get(`${base}/products?limit=${limit}`)
        return response.data
    }
    static async getProduct(id){
        const response = await axios.get(`${base}/products/${id}`)
        return response.data
    }
}
