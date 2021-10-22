import './App.css';
import { List, Create } from './components/Beer';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Cervejas</h1>
            <Create />
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
