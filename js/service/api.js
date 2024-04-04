const setLocalStorage =(key, data) =>{
localStorage.setItem(key, JSON.stringify(data));
};
const getLocalStorage =(key) =>{
    JSON.parse(localStorage.getItem(key));
    };
    export default {
        set: setLocalStorage,
        get: getLocalStorage,
    }