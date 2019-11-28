import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>{

    const [themeToggler, setThemeToggler] = useState({
        isLightTheme:true
    })

    const [theme, setTheme] = useState([
        {light: {backdrop:'#eee', syntax:'#333', hover:'#99888e'} },
        {dark: {backdrop:'#555', syntax:'#ddd', hover:'#333'} } 
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