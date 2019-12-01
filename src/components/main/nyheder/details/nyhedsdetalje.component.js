import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../../context/theme.context'
import { NewsContext } from '../../../../context/news.context'

import './nyhedsdetalje.style.css'


const NyhedsDetaljeComponent = (props) => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    const { news } = useContext(NewsContext)



    console.log(props.match.params.id)
    // set up Nyheder
    
    const chosenNews = props.match.params.id


    return (
        <div className="NyhedDetaljeStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

        <div className="setUpDetailsNews">

            <p className="headline">{news[chosenNews].title}</p>
            <img src={window.location.origin + news[chosenNews].img} />
            <p className="description">{news[chosenNews].beskrivelse}</p>
            <NavLink to ='/' style={{ color: activeTheme.linkcolor }}>Back</NavLink>



        </div>
  
            

        </div>
    )
}

export default NyhedsDetaljeComponent 