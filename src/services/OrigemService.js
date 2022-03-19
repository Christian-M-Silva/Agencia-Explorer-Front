import axios from 'axios';
const ORIGEM_API_BASE_URL = "http://localhost:8080/api/origem";

class OrigemService {
    getOrigem(){
        return axios.get(ORIGEM_API_BASE_URL);
    }

    createOrigem(origem){
        return axios.post(ORIGEM_API_BASE_URL, origem);
    }

    getOrigemById(origemId){
        return axios.get(ORIGEM_API_BASE_URL + '/' + origemId);
    }

    updateOrigem(origem, origemId){
        return axios.put(ORIGEM_API_BASE_URL + '/' + origemId, origem);
    }

    deleteOrigem(origemId){
        return axios.delete(ORIGEM_API_BASE_URL + '/' + origemId);
    }
}

export default new OrigemService()