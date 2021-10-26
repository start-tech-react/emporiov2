import './App.css';
import { List, Create } from './components/Beer';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Cervejas</h1>
            <Create onCreated={() => setRefresh(true)} />
            <List refresh={refresh} onRefreshed={() => setRefresh(false)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
