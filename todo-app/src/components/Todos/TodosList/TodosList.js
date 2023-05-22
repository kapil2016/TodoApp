import styles from './TodosList.module.css'
import MoneyBagIcon from '../../SvgIcons/MoneyBag';
import AddIcon from '../../SvgIcons/AddIcon';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../../States/todos-reducer';
import TodoCard from '../TodoCard/TodoCard';
const TodosList = (props)=>{
    const {id,todos} = props.todos ;
    const inputRef = useRef();
    const descriptionRef = useRef();
    const dispatch = useDispatch()

    const formSubmitHandler=()=>{
      if(inputRef.current.value !== '' && descriptionRef.current.value!==''){
      const todo={
        id : Date.now() ,
        title:inputRef.current.value,
        description:descriptionRef.current.value,
        isDone:false
      }
      dispatch(addNewTodo({id:id , todo:todo}))
      inputRef.current.value='';
      descriptionRef.current.value='';}
    }
    
    return (
      <div className={styles.todoslist}>
        <div className={styles.title}>
            {`List: ${id}`}
        </div>
        <form className={styles.addtodoform}>
            <div className={styles.inputcontainer}>
                <MoneyBagIcon></MoneyBagIcon>
                <input placeholder='Add Todo' ref={inputRef}></input>
                <div onClick={formSubmitHandler}>
                <AddIcon></AddIcon>
                </div>  
            </div>
            <textarea placeholder='Add Todo Description' ref={descriptionRef}></textarea>   
        </form>
        {todos.map((todo)=><TodoCard key={todo.id} listId={id} todo={todo}></TodoCard>)}
      </div>

    )
}

export default TodosList ;