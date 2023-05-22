import styles from './SideBarItem.module.css'

const SideBarItem  = (props)=>{
    return(
        <div className={styles['side-bar-item']} style={props.style}>
          {props.children}
        </div>
    )
}
export default SideBarItem ;