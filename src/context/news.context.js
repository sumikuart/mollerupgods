import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = (props) =>{



    const [news, setNews] = useState([

        {
            title: 'Køb vores hampeprodukter',
            beskrivelse: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..',
            linkBeskrivelse: 'Køb online her',
            img: '/assets/nyheder/350x35000_srcset-large.png',
            id: 0
        },

        {
            title: 'Verdensballetten 2019',
            beskrivelse: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods.',
            linkBeskrivelse: 'se mere her',
            img: '/assets/nyheder/verdensballet0_srcset-large.png',
            id: 1
        },
        {
            title: 'Historien om Møllerup Gods',
            beskrivelse: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.',
            linkBeskrivelse: 'Læs historien her',
            img: '/assets/nyheder/moellerup0_srcset-large.png',
            id: 2
        },
        {
            title: 'Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften',
            beskrivelse: 'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020',
            linkBeskrivelse: 'Køb online her',
            img: '/assets/nyheder/IMG000200_srcset-large.jpg',
            id: 3
        }
    ])



return(

    <NewsContext.Provider value={{news}}>
          {props.children}
    </NewsContext.Provider>

)

}

export default NewsContextProvider