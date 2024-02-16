import './App.css';
import Button from './components/Button';
import Card from './components/card';
import List from './components/list';
import Job from './components/job';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <ul>
          <List content="coffee" />
          <List content="tea" />
          <List content="beer" />
        </ul>
        <Card image="https://www.w3schools.com/howto/img_avatar.png" />
        <Job Job="Architect & Engineer" />
      </header>
    </div>
  );
}

export default App;
