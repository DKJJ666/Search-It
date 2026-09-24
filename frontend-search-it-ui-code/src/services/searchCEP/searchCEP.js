import { viaCEPAPI } from '../api.js';

export async function searchCEP(cep) {

    if(!/^\d{8}$/.test(cep)){ //p
        const message = `This is not a valid CEP`;
        console.log(message);
    
        return window.alert(message);

    
    }

    try {
        const url = `${cep}/json/`;
        const response = await viaCEPAPI.get(url)

        console.log(response.data);
        return response.data;

    } catch (error) {

        console.error({
            message: `Error searching CEP: ${error}`
        
        
        })

        window.alert(`Error searching CEP: ${error}`)
        
    }



}

