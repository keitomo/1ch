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
        <ChatCreateForm 
          onSubmit={ (field) => {
            const resultField ={};
            Object.keys(field).map(key=>
              {
                resultField[key]=field[key]
              }
            );
            resultField["date"]=new Date();
            return resultField;
          }
          }
        />
    </div>
  );
}

export default App;
