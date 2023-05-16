import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import axios from 'axios';

export function Artworks() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://deviantartapi8232.onrender.com/');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <Container>
            <h1>ALL ART PROGRESS</h1>
            {data && Object.entries(data).map(([key, value]) => (
                <div key={key}>
                <h3>{key}</h3>
                <img src={value} alt={key} />
            </div>
            ))}
        </Container>
    )
}