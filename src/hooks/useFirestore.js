import { useState, useEffect } from "react";

export const useFirestore = (asyncFn, dependencies = []) => {
    const [data, setData] = useState(); 
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true);

        asyncFn().then(resp => {
            setData(resp)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })

    }, dependencies)

    return {
        isLoading, 
        data, 
        error
    }
} 