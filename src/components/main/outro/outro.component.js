import React, {useContext, useState} from 'react';
import './outro.style.css'

// context
import { ThemeContext } from '../../../context/theme.context'

// import img
import partner from '../../../assets/LogoAutoriseretPartner1_srcset-large.png'


const OutroCom = () => {


    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    return(

        <div className='outroStyle' style={{ background:activeTheme.backdrop, color: activeTheme.syntax}}>

                    

            <div className="flexerOutro">
                <div>
                         <img src={partner} alt="Dansk Konferencecenter"/>
                         <p>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</p>
                </div>
               

                   <div className="formOutro">
                       <p className='headline'>Tilmeld Nyhedsbrev</p>

                       <p className='info'> <span>*</span> skal udfyldes</p>


                        <form>

                            <div className="outroTextForm">
                                <label>Email Address <span>*</span></label>
                                <input type="text"/>

                                <label>Forname</label>
                                <input type="text"/>

                                <label>Efternavn</label>
                                <input type="text"/>
                            </div>
                 
                            <div className='checkboxForm'>
                                <label>Vælg Nyhedsbrev</label>

                                <div className='flexerInnerOutro'>
                                <input type="checkbox" name="Møllerup Alle" id=""/>
                                    <p>Møllerup Alle</p>
                                </div>

                                <div className='flexerInnerOutro'>
                                <input type="checkbox" name="Verdensballeten" id=""/>
                                    <p>Verdensballeten</p>
                                </div>


                                <div className='flexerInnerOutro'>
                                <input type="checkbox" name="Møllerup Hamp" id=""/>
                                    <p>Møllerup Hamp</p>
                                </div>
                            </div>
               

                        <input type="button" value="Tilmeld" className='outroButton'/>
                        </form>
                   </div>
            </div>


        </div>

    )
}

export default OutroCom 