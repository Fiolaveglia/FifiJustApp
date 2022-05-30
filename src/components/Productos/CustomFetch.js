
const customFetch = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time); 
    });
}

export default customFetch;