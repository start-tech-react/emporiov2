import './App.css';
import { Index as BeerIndex } from './components/Product/Beer';
import { Index as WineIndex } from './components/Product/Wine';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Shared/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={BeerIndex} path="/beers" />
              <Route component={WineIndex} path="/wines" />
              <Route path="*">
                <h4>Página não encontrada...</h4>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
