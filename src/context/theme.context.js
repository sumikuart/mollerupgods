import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>{

    const [themeToggler, setThemeToggler] = useState({
        isLightTheme:true
    })

    const [theme, setTheme] = useState([
        {light: {backdrop:'#eee', syntax:'#333', hover:'#99888e', ambientbackdrop:'#eee', linkcolor:'black', widerbackdrop:'#eee', footerbackdrop:'#E4E4E4'} },
        {dark: {backdrop:'#555', syntax:'#ddd', hover:'#333', ambientbackdrop:'#2A3439',  linkcolor:'white', widerbackdrop:'#555', footerbackdrop:'#3F484C'} } 
    ])


    const toggleTheme = () => {

        setThemeToggler({isLightTheme: !themeToggler.isLightTheme})
        
    }


return(

    <ThemeContext.Provider value={{theme, themeToggler, toggleTheme}}>
          {props.children}
    </ThemeContext.Provider>

)

}

export default ThemeContextProvider