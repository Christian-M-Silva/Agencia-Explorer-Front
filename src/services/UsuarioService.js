import axios from 'axios';
const USUARIO_API_BASE_URL = "http://localhost:8080/api/usuario";

class UsuarioService {
    getUsuario(){
        return axios.get(USUARIO_API_BASE_URL);
    }

    createUsuario(usuario){
        return axios.post(USUARIO_API_BASE_URL, usuario);
    }

    getUsuarioById(usuarioId){
        return axios.get(USUARIO_API_BASE_URL + '/' + usuarioId);
    }

    updateUsuario(usuario, usuarioId){
        return axios.put(USUARIO_API_BASE_URL + '/' + usuarioId, usuario);
    }

    deleteUsuario(usuarioId){
        return axios.delete(USUARIO_API_BASE_URL + '/' + usuarioId);
    }
}

export default new UsuarioService()