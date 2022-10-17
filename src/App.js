import './App.css';
import { Message } from './Components/Message';

export function App() {
  const text = 'Привет, как дела?';
  return (
    <div>
      <h1 className="App">Hello</h1>
      <Message txt={text}/>
    </div>
  );
}

// export default App;
