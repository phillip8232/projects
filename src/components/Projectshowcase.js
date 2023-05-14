import React, { useState, useEffect } from 'react';

import axios from 'axios';

export function Projectshowcase(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            
        const result = await axios.get('https://expressserverproject8232.onrender.com/itchio/games');
            
        setData(result.data.games);
            
        };
        fetchData();
    }, []);
    return(
        <div>
            {console.log(data)}
        </div>
    )
}