import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  const cols = [
    { id: 1, image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
    {id: 2, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'},
    {id: 3, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp'},
    {id: 4, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'},
    {id: 5, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp'},
    {id: 6, image: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp'},
    {id: 7, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp'},
    {id: 8, image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
    {id: 9, image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp'}
  ]
  return (
    <Container>
      <h2 style={{textAlign: 'center', textDecorationLine: 'underline'}}>Making an Image Grid using React-Bootstrap</h2>
      <Row>
          {cols.map((col) => {
            return (
              <Col className="border rounded-3 col-lg-4 col-md-12 mb-4 mb-lg-0 px-0">
                <img key={col.id} src={col.image} alt="to add" className="img-fluid rounded"/>
              </Col>
            )
          })}
      </Row>
    </Container>
  );
}
export default ContainerExample;