import styles from './TodosList.module.css'
import { useRef } from 'react'
import AddIcon from '../../SvgIcons/AddIcon'
import { createNewTodoList } from '../../../States/todos-reducer'
import { useDispatch } from 'react-redux'

const AddTodoList = () => {
    const inputRef = useRef();
    const dispatch = useDispatch()
    const createNewListHandler = () => {
        if(inputRef.current.value !== ''){
        const obj={
            id:inputRef.current.value,
            todos:[]
        }
        inputRef.current.value = '';
        dispatch(createNewTodoList(obj))}
    }
    return (
        <div className={styles.title}>
            <div className={styles.inputcontainer}>
                <input placeholder='Add Todo-List' ref={inputRef}></input>
                <div onClick={createNewListHandler} className={styles.addbutton}>
                    <AddIcon></AddIcon>
                </div>
            </div>
        </div>

    )
}

export default AddTodoList;