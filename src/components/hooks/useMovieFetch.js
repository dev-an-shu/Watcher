import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';


export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try{
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();

            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();

            //const recommendationEndpoint = `${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`;
            //const recommendationResult = await (await fetch(recommendationEndpoint)).json();

            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );
            const writting = creditsResult.crew.filter(
                writers => writers.department === 'Writing'
            );
            
            setState({
                ...result,
                actors: creditsResult.cast,
                writting,
                directors,
            })

        }catch(error){
            setError(true);
        }
        setLoading(false);
    }, [movieId]);

    // Fetch movies and credits
    useEffect(() => {
        fetchData();
    }, [fetchData])

    return [state, loading, error];

}