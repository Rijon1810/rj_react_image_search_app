import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IhKEST9dRioBdqMRFOVU_7kypRAMg6defi5Cp7DhrRc'
    }

});