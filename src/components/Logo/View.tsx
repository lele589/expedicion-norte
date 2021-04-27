import {FunctionComponent} from "react";
import {Link} from "react-router-dom";

import { LogoProps } from "./View.Types";
import styles from "../../pages/components/Navbar/View.module.css";
import logo from "../../assets/images/logo.svg";

const Logo: FunctionComponent<LogoProps> = ({ onClick }) => {

    return(
        <Link to='/' onClick={onClick}>
            <img className={styles.logo} src={logo} alt="Expedición Norte"/>
        </Link>
    )
}

export default Logo