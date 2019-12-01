import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../../context/theme.context'
import { AktivContext } from '../../../../context/aktiv.context'

import './aktivdetails.style.css'


const AktivsDetaljeComponent = (props) => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    const { aktiv } = useContext(AktivContext)



    console.log(props.match.params.id)


    // set up Aktivitet
    const chosenNewAktiv= props.match.params.id


    return (
        <div className="AktivDetaljeStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

        <div className="setUpDetailsAktiv">

            <p className="headline">{aktiv[chosenNewAktiv].title}</p>
            <img src={window.location.origin + aktiv[chosenNewAktiv].img} />
            <p className="description">{aktiv[chosenNewAktiv].beskrivelse}</p>
            <NavLink to ='/' style={{ color: activeTheme.linkcolor }}>Back</NavLink>



        </div>
  
            

        </div>
    )
}

export default AktivsDetaljeComponent 