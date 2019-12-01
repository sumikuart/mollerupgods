import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../context/theme.context'
import { NewsContext } from '../../../context/news.context'

import './nyheder.style.css'


const NewsListPoster = (props) => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

        return(
   
            <div className='mapStyle'>
                <img src={window.location.origin + props.currentNews.img} />
                <p className="headline">{props.currentNews.title}</p>
                <p className="description">{props.currentNews.beskrivelse}</p>
                <NavLink to={'/news/' + props.currentNews.id} style={{ color: activeTheme.linkcolor }}> {props.currentNews.linkBeskrivelse} </NavLink>
            </div>
)




}

const NyhedsComponent = () => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    const { news } = useContext(NewsContext)


    // set up Nyheder


    const smallNyhedsMapper = (e) =>{
        return news.map(function(currentNews, i){
            if (i < news.length -1){
                return <NewsListPoster  currentNews={currentNews} key={i} />
            }
        })

    }

    const bigNyhedsMapper = (e) =>{
        return news.map(function(currentNews, i){
            if (i == news.length -1){
                return <NewsListPoster  currentNews={currentNews} key={i} />
            }
        })

    }

    return (
        <div className="NyhedStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <div className='bigNewsContainer'>
               {bigNyhedsMapper()}
            </div>

            <div className='smallNewsContainer'>
                {smallNyhedsMapper()}
            </div>



        </div>
    )
}

export default NyhedsComponent 