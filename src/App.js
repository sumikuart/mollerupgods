import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Context
import ThemeContextProvider from './context/theme.context';

// Componentss
import MainHeader from './components/header/header.component';
import IntroCom from './components/main/intro/intro.component';


function App() {
  return (
    <div className="App">

    <Router>

      <ThemeContextProvider>

        <header>
          <MainHeader/>
        </header>

        <main>
          <IntroCom />
        </main>
        
        <footer></footer>

      </ThemeContextProvider>

      
    </Router>
    </div>
  );
}

export default App;
