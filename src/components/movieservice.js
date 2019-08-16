import {API_URL,API_KEY} from '../config';



        //const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        //const tv_endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMovies = async (endpoint) => {
    try {
            const res = fetch(endpoint).then(result => {
            return result.json();
        })
        return res;
    }
    catch (e) {
        console.log('Error :', e)
    }
}

export const fetchShows = async (endpoint) => {
    try {
            const res = fetch(endpoint).then(result => {
            return result.json();
        })
        return res;
    }
    catch (e) {
        console.log('Error :', e)
    }
}

export const getVideo =async (endpoint) =>{
    try{
        const res = fetch(endpoint).then(result => {
            return result.json();
        })
        return res;
    }
    catch(e){
        console.log('ERROR! :',e)
    }
}