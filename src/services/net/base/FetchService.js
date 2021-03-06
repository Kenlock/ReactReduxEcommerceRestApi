import JwtService from '../JwtService';

export const FetchService = {
    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + JwtService.getToken()
            }
        });
    },

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + JwtService.getToken()
            },
            body: data
        });
    },

    put(url, data) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + JwtService.getToken()
            },
            body: data
        });
    },

    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JwtService.getToken()
            }
        });
    }
};