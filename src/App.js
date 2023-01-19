import './App.css';
import {ChatList,ChatCreateForm } from "./ui-components";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          1ch-掲示板
        </header>
        <ChatList />
      </div>
        <ChatCreateForm />
    </div>
  );
}

export default App;
