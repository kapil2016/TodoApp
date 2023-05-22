import styles from './Edittodos.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setEditbarVisibility } from '../../States/editbar-reducer'
import CancelIcon from '../SvgIcons/CancleIcon'
import { useEffect, useRef } from 'react'
import { editTodos } from '../../States/todos-reducer'
const EditTodos = () => {
    const showEditbar = useSelector(state => state.editbar.visibility)
    const values = useSelector(state => state.editbar.values)
    const{listId , id} = values;
   
    const dispatch = useDispatch()
    const inputRef = useRef();
    const descriptionRef = useRef()
    

 
    const toggleEditbar = () => {
        dispatch(setEditbarVisibility({visibility:false , values:null}))
    }

    const editTodoHandler = ()=>{
        const todo={
            id:id , 
            title:inputRef.current.value ,
            description: descriptionRef.current.value,
            isDone:false
        }
        dispatch(editTodos({listId:listId , id:id , todo:todo}))
        dispatch(setEditbarVisibility({visibility:false , values:null}))
    }
 
    useEffect(()=>{
        if(values){
            inputRef.current.value = values.title ;
            descriptionRef.current.value = values.description
        }
    },[values])

    return (
        <div className={`${styles.editbar} ${showEditbar ? styles.open : styles.close}`}>
            <div className={styles.title}>
                <div className={styles['cancle-icon']} onClick={toggleEditbar}>
                    <CancelIcon></CancelIcon>
                </div>
                <span>Edit Todo</span>
            </div>
            <div className={styles['input-edit']}>
                <div className={styles.inputcontainer}>
                    <input ref={inputRef}></input>
                </div>
            </div>
            <div className={styles.addtodoform}>
                <textarea ref={descriptionRef}></textarea>
            </div>
            <div className={styles['button-container']}>
                <button onClick={editTodoHandler}>Save</button>
            </div>
        </div>
    )
}

export default EditTodos;