// Main
import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './nav.style.css'

// context
import { ThemeContext } from '../../../context/theme.context';

const NavBar = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;


    return(
        <div className="navStyle">
            <nav>
                <ul>
                    <li>Velkommen v
                        <ul>
                            <li><NavLink to='/a'> Jagt </NavLink></li>
                            <li><NavLink to='/'> Hestepension </NavLink></li>
                            <li><NavLink to='/'> Lej kontor </NavLink></li>
                            <li><NavLink to='/'> Lej Bolig </NavLink></li>
                            <li><NavLink to='/'> Møllerup bogen </NavLink></li>
                            <li><NavLink to='/'> Hampefrø til udsæd </NavLink></li>
                        </ul>

                    </li>

                    <li>Verdensballetten v
                        <ul>
                            <li><NavLink to='/a'> Verdensballetten Erhverv</NavLink></li>
                            <li><NavLink to='/a'> Sammarbejdspartnere</NavLink></li>
                            <li><NavLink to='/a'> Glade Gæster</NavLink></li>
                            <li><NavLink to='/a'> Gourmetoplevelser</NavLink></li>
                            <li><NavLink to='/a'> Praktisk info</NavLink></li>
                            <li><NavLink to='/a'> Bliv frivilig</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/" style={{color: activeTheme.syntax}}>Nyheder</NavLink></li>

                    <li>Events og mødefaciliteter v
                        <ul>
                            <li><NavLink to='/a'> Ferie</NavLink></li>
                            <li className="sidePushNav"> Fest på møllerup gods >
                                <ul>
                                    <li><NavLink to='/a'>Fest på Hubertus Kroen</NavLink></li>
                                    <li><NavLink to='/a'>Fest i køreladen</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to='/a'> Møder</NavLink></li>
                            <li><NavLink to='/a'> Oplevelser</NavLink></li>
                            <li><NavLink to='/a'> Rundvisninger</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/" style={{color: activeTheme.syntax}}>Hvad siger vores gæster</NavLink></li>

                     <li>Om Møllerup Gods v 
                         <ul>
                         <li><NavLink to='/a'> Hele Historien</NavLink></li>
                         <li><NavLink to='/a'> Galleri</NavLink></li>
                         <li><NavLink to='/a'> Virksomheder på Møllerup</NavLink></li>
                         </ul>
                     </li>

                     <li><NavLink to="/" style={{color: activeTheme.syntax}}>Kontakt os</NavLink></li>
                     <li><NavLink to="/" style={{color: activeTheme.syntax}}>Webshop</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar