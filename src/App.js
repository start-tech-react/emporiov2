import './App.css';
import { List, Create } from './components/Beer';

function App() {
  return (
    <div className="App">
      <h1>Cervejas</h1>
      <Create />
      <List />
    </div>
  );
}

export default App;
