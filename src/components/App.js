import Chat from './Chat';
import { Route } from 'react-router-dom';
import './Chat.css';

function App() {
  return (
    <div>
      <Route path="/:id?">
        <Chat />
      </Route>
    </div>
  );
}

export default App;
