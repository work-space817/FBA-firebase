
import React from 'react';

const getUserId = () => {
    const userId = localStorage.getItem("uid");    
    // console.log('localStorage: ', localStorage.getItem("uid"));
    return userId;
};

export default getUserId;