import { useEffect, useState } from "react";

import { Footer } from "./components/Footer/Footer";
import { Loading } from "./components/Loading/Loading";
import { Navigation } from "./components/Navigation/Navigation";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonText, setButtonText] = useState('Sort Todos by Status');

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }))
        setTodos(result);
        setIsLoading(false);
      });
  }, []);

  const onTodoAddClick = () => {
    const lastId = Number(todos[todos.length - 1].id);
    const text = prompt('Task name:');
    const newTask = { id: lastId + 1, text, isCompleted: false };

    setTodos(state => [newTask, ...state])
  }

  console.log(todos);

  const onSortTodosByStatusClick = () => {
    // const falseFirst = arr.sort((a, b) => Number(a.bool) - Number(b.bool));
    const sortByStatus = [...todos];
    sortByStatus.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    setTodos(sortByStatus);
    setButtonText("Sort by Newest");
  };


  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
  };

  return (
    <div className="App">
      <Navigation />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAddClick}>+ Add New Todo</button>
          </div>
          <div className="add-btn-container">
            <button className="btn" onClick={onSortTodosByStatusClick}>↓↑ Sort Todos by Status</button>
          </div>

          <div className="table-wrapper">
            {isLoading
              ? <Loading />
              : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />
            }



          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;