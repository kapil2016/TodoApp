import Sidebar from './components/SideBar/Sidebar.js';
import styles from './Display.module.css'
import Header from "./components/Header/Header";
import EditTodos from "./components/EditTodos/EditTodos";
import TodosList from './components/Todos/TodosList/TodosList.js';
import AddTodoList from './components/Todos/TodosList/AddTodoListInput.js';
import { useSelector } from 'react-redux';
function App() {
  const todosLists = useSelector(state => state.todos.todosLists)
  if(todosLists){
    localStorage.setItem('todosLists' , JSON.stringify(todosLists))
  }
  const editbarVisibility = useSelector(state=>state.editbar.visibility)



  return (
    <div className={styles['container-main']}>
      <Sidebar></Sidebar>
      <div style={{ height: '100%',width:'100%'}}>
        <Header></Header>
        <div className={styles['container-todos-edit']}>
          <div className={styles['container-todos']}>
            {todosLists.map((list) => <TodosList key={list.id} todos={list}></TodosList>
            )}
            <AddTodoList></AddTodoList>
          </div> 
          <EditTodos></EditTodos>
        </div>
      </div>
    </div>

  );
}

export default App;
