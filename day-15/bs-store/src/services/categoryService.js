import axios from "axios";

class CategoryService {
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASEURL}/categories`;
    }

    async getAllCategories(){
        return await axios.get(this.baseUrl).then(resp => resp.data);
    }

    async getOneCategory(id){
        const url = `${this.baseUrl}/${id}`;
        return await axios.get(url).then(resp => resp.data);
    }

    async createOneCategory(category){
        return await axios.post(this.baseUrl,category).then(resp => resp.data);
    }

    async updateOneCategory(id, category){
        const url = `${this.baseUrl}/${id}`;
        return await axios.put(url,category).then(resp => resp.data);
    }

    async deleteOneCategory(id){
        const url = `${this.baseUrl}/${id}`;
        return  await axios.delete(url).then(resp => resp);
    }
}

export default CategoryService;