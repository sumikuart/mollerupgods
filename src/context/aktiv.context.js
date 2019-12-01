import React, { createContext, useState } from 'react';

export const AktivContext = createContext();

const AktivContextProvier = (props) =>{



    const [aktiv, setAktiv] = useState([

        {
            title: 'Møllerup Hamp',
            beskrivelse: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',
            linkBeskrivelse: 'Køb produkter her',
            img: '/assets/aktiv/ASGSGHampmark250_srcset-large.jpg',
            id: 0
        },
        {
            title: 'Møder & events',
            beskrivelse: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.',
            linkBeskrivelse: 'Læs mere her',
            img: '/assets/aktiv/FestpaaMoellerup21_srcset-large.jpg',
            id: 1
        },
        {
            title: 'Fest på kroen',
            beskrivelse: 'Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/FestpaaMoellerup23_srcset-large.jpg',
            id: 2
        },
        {
            title: 'Rundvisninger',
            beskrivelse: 'Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. ',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/RundvisningMllerupGodsIMG3863204_srcset-large.jpg',
            id: 3
        },
        {
            title: 'Hamp hudpleje',
            beskrivelse: 'Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/HAMPHUDPLEJE01WM345_srcset-large.jpg',
            id: 4
        },
        {
            title: 'Hamp fødevarer',
            beskrivelse: 'Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/MLLERUPBANNERkopi202_srcset-large.jpg',
            id: 5
        },
        {
            title: 'Møllerup bogen',
            beskrivelse: 'Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. ',
            linkBeskrivelse: 'Køb bogen her',
            img: '/assets/aktiv/Skrmbillede20160222kl.17.35.10_srcset-large.png',
            id: 6
        },
        {
            title: 'Møllerup jagt',
            beskrivelse: 'Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/Kvindeligjgeroggodshundenisne_srcset-large.jpg',
            id: 7
        },
        {
            title: 'Ferie for 40',
            beskrivelse: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/ferie205pix5_srcset-large.jpg',
            id: 8
        },
        {
            title: 'Bolig på landet',
            beskrivelse: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/MollerupGodsbolig60_srcset-large.jpg',
            id: 9
        },
        {
            title: 'Hestepension',
            beskrivelse: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/Hestepension205pix30_srcset-large.jpg',
            id: 10
        },
        {
            title: 'Verdensballetten',
            beskrivelse: 'Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.',
            linkBeskrivelse: 'Læs mere her',
            img: '/assets/aktiv/Verdensballetten900_srcset-large.jpg',
            id: 11
        },

    
    
     



     
      
      
    ])



return(

    <AktivContext.Provider value={{aktiv}}>
          {props.children}
    </AktivContext.Provider>

)

}

export default AktivContextProvier