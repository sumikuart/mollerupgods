// Main
import React, {useContext} from 'react';
import './styler.style.css'

// context
import { ThemeContext } from '../../context/theme.context';



const BackdropStyler = () => {


    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    console.log(activeTheme)
 

    return(


        <div className="mainbackdrop" style={{ background:activeTheme.ambientbackdrop, color: activeTheme.syntax}}>

            <div className="widerbackdrop" style={{ background:activeTheme.widerbackdrop, color: activeTheme.syntax}}>


            </div>


        </div>
     
    )
}

export default BackdropStyler 