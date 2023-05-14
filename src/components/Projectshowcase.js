import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container style={{paddingTop:"40px"}} fluid="md">
            <h1>Projects </h1>
            <Row>
                {data ? data.map((el) => <Col><img src={el.cover_url} alt={el.title} /></Col>) : <></> }
            </Row>
        </Container>
    )
}