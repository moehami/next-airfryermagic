// pages/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'bootstrap';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: '9z46zrgh5qec',
  accessToken: 'KzOIik4H_2cON-AliK4ROe8txuHoDWelHPVKsnWDXNM'
});

const Rec = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'recipe' })
      .then((response) => setRecipes(response.items));
  }, []);

  return (
     <Container>
      <Row>
        {recipes.map((item) => (
          <Col key={item.sys.id} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.fields.title}</Card.Title>
                <Card.Text>{item.fields.content}</Card.Text>
                {/* More fields if needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rec;



