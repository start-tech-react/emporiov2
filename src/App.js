import './App.css';
import { List } from './components/Beer';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Cervejas</h1>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
