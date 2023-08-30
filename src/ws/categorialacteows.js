import axios from 'axios';
export default {
    listar:() => {
        return axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://seg.cl/api/laravel/public/api/categorialacteo',
            headers: { }
          });
    }
}