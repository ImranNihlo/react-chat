import Chat from "./Chat";
import { Route } from "react-router-dom";

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
