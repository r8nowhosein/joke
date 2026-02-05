import { useState, useEffect } from 'react';
import FaveJokes from './FaveJokes';

export default function FetchJoke({ faves, setFaves }) {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [addedToFaves, setAddedToFaves] = useState(false);

    const addToFavorites = () => {
    if (joke && !faves.includes(joke)) {
        setFaves(prev => [...prev, joke]);
        setAddedToFaves(true);
    }   
};
     

    const fetchJoke = () => {
        setLoading(true);
        setError('');
        fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch joke');
                return response.json();
            })
            .then(data => {
                console.log(data);
                setJoke(data.joke);
                setAddedToFaves(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Random Joke</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {joke && <h2 className='text-2xl m-12'>{joke}</h2>}
            
           <div className="flex gap-4 justify-center">
             <button onClick={fetchJoke}>Get Another Joke</button>
            
            <button onClick={addToFavorites} className={addedToFaves ? 'text-green-500' : ''} >{addedToFaves ? 'Joke added to fave list' : 'Add to Faves'}</button>
           {console.log(faves) }
           </div>
         
          <FaveJokes list={faves.slice(0, 3)} />

            
          
        </div>
    );
}
