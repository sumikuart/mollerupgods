import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../context/theme.context'


import './footer.style.css'



const FooterComponent = () => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;



    // set up Nyheder

    return (
        <div className="footerStyle" style={{ background: activeTheme.footerbackdrop, color: activeTheme.syntax }}>

<div className="footerWrapper">

         <div className='lineFlexer'>
             <div className='lineOne'>
                 <p>Møllerup Gods</p>
                 <p>Møllerupvej 26</p>
                 <p>8410 Rønde</p>
             </div>

             <div className='lineTwo'>
                 <p>Telefon 87 58 69 00</p>
                 <p>info@moellerup.dk</p>
             </div>
             <div className='lineThree'>
                 <ul>
                     <li><p>Tekst Lone Rubin</p></li>
                 </ul>
             </div>
         </div>


         </div>

        </div>
    )
}

export default FooterComponent 