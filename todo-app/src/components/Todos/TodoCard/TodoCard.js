import styles from './TodoCard.module.css'
import MoneyBagIcon from '../../SvgIcons/MoneyBag';
import PencileIcon from '../../SvgIcons/PencileIcon';
import { useSelector } from 'react-redux';
import { setEditbarVisibility } from '../../../States/editbar-reducer';
import { useDispatch } from 'react-redux';
const TodoCard = (props) => {
    const { id, title, description } = props.todo
    const listId = props.listId
    const select = useSelector(state => state.editbar.values.id)
    const selected = id === select  // check card is selected or not 

    const dispatch = useDispatch()
    const editTodoHandler = () => {
        dispatch(setEditbarVisibility({ visibility: true, values: { listId: listId, ...props.todo } }))
    }

    return (
        <div className={`${styles.todocard} ${selected ? styles.selected : ''}`}>
            <div className={styles.title}>
                <div style={{ display: 'flex', width: '100%' }}>
                    <MoneyBagIcon></MoneyBagIcon>
                    <div style={{ marginLeft: '5px', color: 'white' }}>
                        {title}
                    </div>
                </div>
                <div onClick={editTodoHandler}>
                    <PencileIcon></PencileIcon>
                </div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default TodoCard;