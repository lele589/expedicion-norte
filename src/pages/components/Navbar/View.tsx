import { useState, useEffect, FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import lodash from 'lodash'
import { useDispatch } from "react-redux";

import * as actionTypes from '../../../store/actions'

import Logo from '../../../components/Logo/View'
import Breakpoint from '../../../assets/styles/responsive/breakpoints'
import { FlexDiv } from '../../../assets/styles/utils/utils';
import styles from './View.module.css'
import { NavbarTypes } from './View.Types'

const NavBar: FunctionComponent<NavbarTypes> = ({ isUserLogged }) => {

    const breakpoint: number = 992;
    const [isListVisible, setIsListVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    useEffect(() => {
        windowWidth >= breakpoint && setIsListVisible(true)
      }, []);

    useEffect(() => {
        window.addEventListener("resize", debounceWindowResize);
        return () => {
            window.removeEventListener('resize', debounceWindowResize);
        }
    });
    const closeMobileMenu = (): void => {
        setIsListVisible(false);
    }
    const toggleMobileMenu = (): void => {
        setIsListVisible(!isListVisible);
    }
    const onLogout = (): void => {
        localStorage.removeItem('token');
        dispatch({
            type: actionTypes.USER_LOGGED,
            value: false
        })
        closeMobileMenu()
    }
    const onWindowResize = (): void => {
        setWindowWidth(window.innerWidth);
        if (windowWidth >= breakpoint) {
            setIsListVisible(true)
        } else {
            setIsListVisible(false)
        }
    }

    const debounceWindowResize: any = lodash.throttle(onWindowResize, 10000);

    const iconClasses = isListVisible ? ' fas fa-times' : ' fas fa-bars';
    const listOpenStyle = isListVisible ? {left: 0} : {}

    return (
        <FlexDiv justifyContent="space-between" className={styles.navbar}>
            <Logo onClick={closeMobileMenu}/>
            <Breakpoint query="touch">
                <i onClick={toggleMobileMenu} className={styles.icon + iconClasses} />
            </Breakpoint>

            <div className={styles.list} style={listOpenStyle}>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/" exact className={styles.link}>Inicio</NavLink>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/posts/gastronomia" exact className={styles.link}>Gastronomía</NavLink>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/posts/ruta" exact className={styles.link}>Rutas</NavLink>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/posts/cultura" exact className={styles.link}>Cultura</NavLink>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/posts/deporte" exact className={styles.link}>Deporte</NavLink>
                <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/posts/nuevo" exact className={styles.link}>Crear post</NavLink>
                { isUserLogged
                    ?
                    <>
                        <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/profile" exact className={styles.link}>Mi perfil</NavLink>
                        <NavLink to="/" className={styles.link} onClick={onLogout}>Cerrar sesión</NavLink>
                    </>
                    :
                    <NavLink activeStyle={{color: '#439169'}} onClick={closeMobileMenu} to="/login" exact className={styles.link}>Iniciar sesión</NavLink>
                }
            </div>
        </FlexDiv>
    );
}
export default NavBar;