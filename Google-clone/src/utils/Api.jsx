
import axios from 'axios';

const baseUrl = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : '',
    cx : ''
}

export const fetchDataFromApi = async (payload) =>{
    const { data} = await axios.get(baseUrl, {
        params : {...params, ...payload}
    });

    return data;
}