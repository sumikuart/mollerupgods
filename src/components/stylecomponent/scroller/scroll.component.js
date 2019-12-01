// Main
import React, {useContext} from 'react';
import './scroll.style.css'

// context
import { ThemeContext } from '../../../context/theme.context';



const Scroller = () => {


    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

 const scrolleTop = () => {
    window.scrollTo(0, 0);
 }



    return(


        <div className="ScrollStyle" style={{ background:activeTheme.ambientbackdrop, color: activeTheme.syntax, border: '2px solid' + activeTheme.syntax}}>
        
        <div onClick={scrolleTop}>
            <p>^ Top ^</p>
        </div>

        
        <div className="headerThemeTogglerDiv" onClick={toggleTheme} > 

<p>Change Theme</p>

</div>

        </div>
     
    )
}

export default Scroller 