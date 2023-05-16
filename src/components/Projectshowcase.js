import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card  from 'react-bootstrap/Card';
import '../App.css';

import axios from 'axios';

export function Projectshowcase() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://expressserverproject8232.onrender.com/itchio/games');
    
      const sortedData = [...result.data.games].sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at > b.created_at) return -1;
        return 0;
      });
    
      const filteredData = sortedData.filter(game => {
        const { short_text } = game;
        return !short_text.includes('nsfw') && !short_text.includes('WIP');
      });
    
      setData(filteredData);
    };
    fetchData();
  }, []);
  
  const numItems = data ? data.length : 0;
  const numSlides = Math.ceil(numItems / 3);
  
  const slides = [];
  for (let i = 0; i < numSlides; i++) {
    const startIndex = i * 3;
    const endIndex = Math.min(startIndex + 3, numItems);
    const slideData = data ? data.slice(startIndex, endIndex) : [];
    const slide = (
        <Carousel.Item key={i}>
        <Row>
          {slideData.map((el) => (
            <Col key={el.id}>
              <Card>
                <a href={`${el.url}`}>
                  <Card.Img
                    variant="top"
                    src={el.cover_url}
                    alt={el.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <Card.ImgOverlay className="project-item">
                    <Card.Title className="d-none d-sm-block">{el.title}</Card.Title>
                    <Card.Text className="d-none d-sm-block" style={{ fontSize: '14px' }}>{el.short_text}</Card.Text>
                  </Card.ImgOverlay>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
    slides.push(slide);
  }
  
  return (
    <Container style={{ paddingTop: "40px" }} fluid="md">
      <h1>Game Projects</h1>
      {data ? (
        <Carousel interval={5000 - (100 * data.length)} indicators={false}>
          {slides}
        </Carousel>
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
}
