import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../context/theme.context'
import { AktivContext } from '../../../context/aktiv.context'

import './aktiviteter.style.css'

// load images

const AktivListPoster = (props) => {


    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

        return(
   
            <div className='mapStyle'>
                <img src={window.location.origin + props.currentAktiv.img} />
                <p className="headline">{props.currentAktiv.title}</p>
                <p className="description">{props.currentAktiv.beskrivelse}</p>
                <NavLink to={'/aktiviteter/' + props.currentAktiv.id} style={{ color: activeTheme.linkcolor }}> {props.currentAktiv.linkBeskrivelse} </NavLink>
            </div>
)




}

const AktivitetsComponent = () => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    // set up aktiv,

    const { aktiv } = useContext(AktivContext)





    const aktivMapper = (e) =>{
        return aktiv.map(function(currentAktiv, i){

                return <AktivListPoster  currentAktiv={currentAktiv} key={i} />

        })

    }

    return (
        <div className="aktivStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

        <div className="infoAktiveDiv">
            <p className="headline">Møllerup Gods tilbyder en perlerække af muligheder</p>
            <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>

        </div>

            <div className='aktivContainer'>
                {aktivMapper()}
            </div>

        </div>
    )
}

export default AktivitetsComponent 