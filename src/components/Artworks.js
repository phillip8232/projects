import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import axios from 'axios';

export function Artworks() {
  const [data, setData] = useState(null);
  const itemsPerPage = 30; // Change this value to determine the number of items per page

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

  const renderArtworkItems = () => {
    if (!data) {
      return null;
    }

    const artworkKeys = Object.keys(data);
    const totalItems = artworkKeys.length;

    const pages = Math.ceil(totalItems / itemsPerPage);

    const artworkItems = [];
    for (let page = 0; page < pages; page++) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const artworks = artworkKeys.slice(startIndex, endIndex).map((key) => {
        const value = data[key];
        return (
          <Col key={key} sm={4} md={3} lg={2}>
            <div>
              <h5>{key}</h5>
              <Image src={value} alt={key} fluid style={{ width: '100%', height: 'auto' }} />
            </div>
          </Col>
        );
      });

      artworkItems.push(
        <Row key={page}>
          {artworks}
        </Row>
      );
    }

    return artworkItems.map((item) => item);
  };

  return (
    <Container>
      <h1>ALL ART PROGRESS</h1>
      {renderArtworkItems()}
    </Container>
  );
}
