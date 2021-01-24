import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';


export const useActorFetch = personId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try{
            const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            
            setState({
                ...result,
            })

        }catch(error){
            setError(true);
        }
        setLoading(false);
    }, [personId]);

    // Fetch actors
    useEffect(() => {
        fetchData();
    }, [fetchData])

    return [state, loading, error];

}