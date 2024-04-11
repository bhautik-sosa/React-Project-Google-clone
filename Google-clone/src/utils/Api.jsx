
import axios from 'axios';

const baseUrl = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : 'AIzaSyAOw9Fnlwybjz5wM-bkdCTWNCG_N1_Lnx4',
    cx : '530a4f12fb8754450'
}

export const fetchDataFromApi = async (payload) =>{
    const { data} = await axios.get(baseUrl, {
        params : {...params, ...payload}
    });

    return data;
}