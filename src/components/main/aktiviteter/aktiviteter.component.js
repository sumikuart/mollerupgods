import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../context/theme.context'

import './aktiviteter.style.css'

// load images

const AktivListPoster = (props) => {



        return(
   
            <div className='mapStyle'>
                <img src={window.location.origin + props.currentAktiv.img} />
                <p className="headline">{props.currentAktiv.title}</p>
                <p className="description">{props.currentAktiv.beskrivelse}</p>
                <NavLink to={'/aktiviteter/' + props.currentAktiv.title}> {props.currentAktiv.linkBeskrivelse} </NavLink>
            </div>
)




}

const AktivitetsComponent = () => {


    // set up Theme
    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isLightTheme ? theme[0].light : theme[1].dark;

    // set up Nyheder

    const [aktiv, setAktiv] = useState([
        {
            title: 'Verdensballetten',
            beskrivelse: 'Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.',
            linkBeskrivelse: 'Læs mere her',
            img: '/assets/aktiv/Verdensballetten900_srcset-large.jpg',
            id: 0
        },
        {
            title: 'Hestepension',
            beskrivelse: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/Hestepension205pix30_srcset-large.jpg',
            id: 1
        },
        {
            title: 'Bolig på landet',
            beskrivelse: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/MollerupGodsbolig60_srcset-large.jpg',
            id: 2
        },
        {
            title: 'Ferie for 40',
            beskrivelse: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/ferie205pix5_srcset-large.jpg',
            id: 3
        },
        {
            title: 'Møllerup jagt',
            beskrivelse: 'Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.',
            linkBeskrivelse: 'læs mere her',
            img: '/assets/aktiv/Kvindeligjgeroggodshundenisne_srcset-large.jpg',
            id: 4
        },
        {
            title: 'Møllerup bogen',
            beskrivelse: 'Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. ',
            linkBeskrivelse: 'Køb bogen her',
            img: '/assets/aktiv/Skrmbillede20160222kl.17.35.10_srcset-large.png',
            id: 5
        },
        {
            title: 'Hamp fødevarer',
            beskrivelse: 'Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/MLLERUPBANNERkopi202_srcset-large.jpg',
            id: 6
        },
        {
            title: 'Hamp hudpleje',
            beskrivelse: 'Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/HAMPHUDPLEJE01WM345_srcset-large.jpg',
            id: 7
        },
        {
            title: 'Rundvisninger',
            beskrivelse: 'Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. ',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/RundvisningMllerupGodsIMG3863204_srcset-large.jpg',
            id: 8
        },
        {
            title: 'Fest på kroen',
            beskrivelse: 'Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.',
            linkBeskrivelse: 'Læs mere',
            img: '/assets/aktiv/FestpaaMoellerup23_srcset-large.jpg',
            id: 9
        },
        {
            title: 'Møder & events',
            beskrivelse: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.',
            linkBeskrivelse: 'Læs mere her',
            img: '/assets/aktiv/FestpaaMoellerup21_srcset-large.jpg',
            id: 10
        },
        {
            title: 'Møllerup Hamp',
            beskrivelse: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',
            linkBeskrivelse: 'Køb produkter her',
            img: '/assets/aktiv/ASGSGHampmark250_srcset-large.jpg',
            id: 11
        },
    ])



    const aktivMapper = (e) =>{
        return aktiv.reverse().map(function(currentAktiv, i){

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