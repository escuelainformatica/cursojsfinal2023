import axios from 'axios';
export default {
    vacio: () => {
        return {
            id: null,
            nombre: null,
            idimagen: null,
            idcategoria: null,
            cantidad: null,
        }
    },
    listar: () => {
        return axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://seg.cl/api/laravel/public/api/productolacteo',
            headers: {}
        });
    },
    get: (id) => {
        return axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://seg.cl/api/laravel/public/api/productolacteo/get/'+id,
            headers: {}
        });
    },
    insertar:(producto)=>{
        return axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://seg.cl/api/laravel/public/api/productolacteo/insert',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : producto
          });
    },
    actualizar:(producto)=>{
        return axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://seg.cl/api/laravel/public/api/productolacteo/update',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : producto
          });
    }    
}