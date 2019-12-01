import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Context
import ThemeContextProvider from './context/theme.context';
import NewsContextProvider from './context/news.context';
import AktivContextProvier from './context/aktiv.context';

// Componentss
import MainHeader from './components/header/header.component';
import IntroCom from './components/main/intro/intro.component';
import NyhedsComponent from './components/main/nyheder/nyheder.component';
import AktivitetsComponent from './components/main/aktiviteter/aktiviteter.component';
import NyhedsDetaljeComponent from './components/main/nyheder/details/nyhedsdetalje.component';
import AktivsDetaljeComponent from './components/main/aktiviteter/aktivdetails/aktivdetails.component';
import BackdropStyler from './components/stylecomponent/styler.component';
import FooterComponent from './components/footer/footer.component';
import OutroCom from './components/main/outro/outro.component';
import Scroller from './components/stylecomponent/scroller/scroll.component';


function App() {
  return (
    <div className="App">



    <Router>



      <ThemeContextProvider>

      <BackdropStyler></BackdropStyler>

      <Route path='/' component={Scroller} />

        <div className="wrapper">
          

        <header>
          <MainHeader/>
        </header>

        <main>
          <Route exact path='/' component={IntroCom} />

            <NewsContextProvider>

              <Route exact path='/' component={NyhedsComponent} />
                  <Route exact path='/news/:id' component={NyhedsDetaljeComponent} />
                  
            </NewsContextProvider>

          <AktivContextProvier>

          <Route exact path='/' component={AktivitetsComponent} />
              <Route exact path='/aktiviteter/:id' component={AktivsDetaljeComponent} />

          </AktivContextProvier>

          <Route  exact path='/' component={OutroCom} />
    
        </main>
        </div>


        <footer>
          <FooterComponent />
        </footer>
      </ThemeContextProvider>

      
    </Router>
    </div>
  );
}

export default App;
