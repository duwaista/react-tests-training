import './App.css';
import TextList from './components/TextList';

function App() {
  const list = ['A', 'B', 'O', 'B', 'A'];

  return (
    <div data-testid="App" className="App">
      <div className="boobas">Text:</div>
      <TextList list={list} />
    </div>
  );
}

export default App;
