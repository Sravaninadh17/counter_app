import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <Counter title="Counter A" />
      <Counter title="Counter B" />
      <Counter title="Counter C" />

    </div>
  );
}

export default App;
