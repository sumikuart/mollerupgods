// Main
import React, {useContext} from 'react';
import './header.style.css'

// context
import { ThemeContext } from '../../context/theme.context';

// components:
import NavBar from './navbar/nav.component';

// images
import logo from '../../assets/logo.png'


const MainHeader = () => {


    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    console.log(activeTheme)
 

    return(


        <div className="mainHeader" style={{ background:activeTheme.backdrop, color: activeTheme.syntax}}>

            <div className="logoholder">
                <a href="/">
                    <img src={logo} alt="Mollerup Estate" />
                </a>
            </div>

         <NavBar />

        </div>

    )
}

export default MainHeader 