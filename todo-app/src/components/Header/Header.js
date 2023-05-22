import styles from './Header.module.css'
import WalletIcon from '../SvgIcons/WaletSvg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSidebarVisibility } from '../../States/sidebar-reducer';
import MenuIcon from '../SvgIcons/MenuSvg';
const Header = () => {
    const showSidebar = useSelector(state => state.sidebar.visibilty)
    const dispatch = useDispatch()
    // console.log(showSidebar)
    const toggleSidebar =()=>{
        dispatch(setSidebarVisibility(true))
    }
    return (
        <div className={styles.header}>
            <div style={{display:'flex' , marginLeft:'10px'}}>
            { !showSidebar && <div onClick={toggleSidebar}><MenuIcon></MenuIcon></div> }   
            <span className={styles['header-section']}>Section</span>
            </div>
           
            <div className={styles['header-wallet']}>
                <WalletIcon></WalletIcon>
                <span className={styles['header-balence']}>
                    0.2 $XYZ
                </span>
                <span className={styles['header-tier']}>
                    Tier 1
                </span>
            </div>
        </div>
    )
}
export default Header;