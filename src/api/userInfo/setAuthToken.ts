import React from 'react';

const setAuthToken = (token: string, uid: string) => {
    if (token && uid) {
        localStorage.setItem('token', token);
        localStorage.setItem('uid', uid);
    } else {
        localStorage.removeItem("token");
        localStorage.removeItem("uid");
    }
}
            
    

export default setAuthToken;