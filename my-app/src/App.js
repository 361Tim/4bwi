import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <ul content="Coffee" />
      </header>
    </div>
  );
}

export default App;
