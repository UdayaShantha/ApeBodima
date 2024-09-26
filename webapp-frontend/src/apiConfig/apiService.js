import apiClient from '../apiConfig/apiClient';

export const fetchBodimTypes = () => {
    return apiClient.get('bodimTypes/names');
};
 
export const postBodimDetails = (data) => {
    return apiClient.post('bodime-details/save/{userId}', data);
};

export const registerUser = (data)=>{
    return apiClient.post('registration/user',data);
}



