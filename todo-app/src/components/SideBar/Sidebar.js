import React from 'react';
import styles from './SideBar.module.css';
import SideBarItem from './SideBarItem';
import HomeIcon from '../SvgIcons/HomeIconSvg';
import Section1Icon from '../SvgIcons/Section1Svg';
import Section2Icon from '../SvgIcons/Section2Svg';
import NameIcon from '../SvgIcons/NameSvg';
import ClosingIcon from '../SvgIcons/ClosingSvg';
import ShareIcon from '../SvgIcons/ShareSvg';
import ShareIconWhite from '../SvgIcons/ShareSvgWhite';
import { setSidebarVisibility } from '../../States/sidebar-reducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const sidebaritemlist = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Section 1', icon: <Section1Icon /> },
    { name: 'Section 2', icon: <Section2Icon /> },
    { name: 'Section 8', icon: <ShareIcon /> }
]


const Sidebar = () => {
    const showSidebar = useSelector(state => state.sidebar.visibilty)
    const dispatch = useDispatch()
    const toggleSidebar = () => {
        dispatch(setSidebarVisibility(false))
    }
    return (
        <div className={`${styles.sidebar} ${showSidebar ? styles.open : styles.close}`}>
            <div className={styles.logo}>
                <NameIcon></NameIcon>
                <span>Name</span>
                <div onClick={toggleSidebar}>
                    <ClosingIcon ></ClosingIcon>
                </div>
            </div>
            {sidebaritemlist.map((item) => <SideBarItem key={item.name}>{item.icon}<div>{item.name}</div></SideBarItem>)}
            <SideBarItem style={{ color: 'white', background: '#353945', borderRadius: '12px' }}>
                <ShareIconWhite></ShareIconWhite>
                <div>Section 8</div>
            </SideBarItem>
        </div>
    );
};

export default Sidebar;
