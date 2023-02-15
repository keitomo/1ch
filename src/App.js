import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ChatList,ChatCreateForm,TodoList,TodoCreateForm,TodoUpdateForm } from "./ui-components";
import {useState} from 'react';

function Chat(){
  return(
    <div>
      <div className="App">
        <header className="App-header">
          1ch-掲示板
        </header>
        <ChatList />
      </div>
        <ChatCreateForm />
    </div>
    )
}

function Todo(){
  const [todo,setTodo] = useState()
  return(
    <div>
      <div className="App">
        <header className="App-header">
          TodoList
        </header>
      </div>
        <TodoList
          overrideItems={({ item, index }) => ({
            backgroundColor: index % 2 === 0 ? 'white' : 'lightgray',
            onClick: () => setTodo(item)
          })}
        />
        {todo ?
        <TodoUpdateForm todo={todo} onSuccess={()=>{setTodo()}} />:
        <TodoCreateForm 
        onSubmit={(fields)=>{
          console.log(fields)
          return fields
        }}/>
        }
    </div>
    )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Chat />} />
        <Route path={`/todo/`} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
