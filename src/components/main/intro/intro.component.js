import React, {useContext, useState} from 'react';
import './intro.style.css'

// context
import { ThemeContext } from '../../../context/theme.context'

// import img
import banner1 from '../../../assets/banner1_srcset-large.png'
import banner2 from '../../../assets/banner2_srcset-large.png'
import banner3 from '../../../assets/banner3_srcset-large.png'

const IntroCom = () => {

    const [introSlider, setIntroSlider] = useState('posmidt')

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;



const moveIntroImgLeft = () => {

    if(introSlider == 'posmidt') {
        setIntroSlider('posLeft')
    }
    if(introSlider == 'posright') {
        setIntroSlider('posmidt')
    }
}


const moveIntroImgRight = () => {

    if(introSlider == 'posmidt') {
        setIntroSlider('posright')
    }
    if(introSlider == 'posLeft') {
    setIntroSlider('posmidt')
    }
}


    return(
        <div className="introStyle" style={{ background:activeTheme.backdrop, color: activeTheme.syntax}}>

            <div className="introLeftButton" onClick={moveIntroImgLeft}>
                <p>&#x2190;</p>
            </div>

            <div className="imgContainer">
                <div className={"imgIntroSlider " + introSlider}>
                    <img src={banner2} alt="banner2" />
                    <img src={banner3} alt="banner3" />
                    <img src={banner1} alt="banner1" />
                </div>
            </div>

            <div className="introRightButton" onClick={moveIntroImgRight}>
                <p>	&#x2192;</p>

            </div>

    
        </div>
    )
}

export default IntroCom 