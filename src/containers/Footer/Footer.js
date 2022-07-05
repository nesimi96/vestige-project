import React from 'react';
import '../../sass/main.scss';
import Copyright from '../../components/Copyright/Copyright';
import ContactItem from '../../components/FooterComponents/ContactItem';
import Instagram from '../../components/svg/Instagram';
import Location from '../../components/svg/Location';
import Phone from '../../components/svg/Phone';
import Facebook from '../../components/svg/Facebook';
import Mail from '../../components/svg/Mail';

const Footer = (props) => {

    const router = props.route;

    const iconStyle = { fill: '#e4c7a5', width: 13.5, height: 13.5 }
 
    const contactData = [
        {text: 'BIH +387 62 738 954', svg: <Phone style={iconStyle}/>, },
        {text: 'SRB: +381 64 95 39 139', svg: <Phone style={iconStyle}/>, },
        {text: 'GB: +44 20 3772 4547', svg: <Phone style={iconStyle}/>, },
        {text: 'INSTAGRAM/VESTIGE.BA', svg: <Instagram style={iconStyle}/> , 
    link: "https://www.instagram.com/vestige.ba/"},
        {text: 'CONTACT@VESTIGE-TESTERI.BA', svg: <Mail style={iconStyle}/>},
        {text: '71000 SARAJEVO', svg: <Location style={iconStyle}/>},
    ]

    const contactItems = contactData.map((curContact, index) => {
        return <ContactItem link={curContact.link} key={index} text={curContact.text} svg={curContact.svg} style={curContact.style} />
    })

    const pagesData = [
        {text: 'originalni testeri', route: '/originalni-testeri-55ml/page=1'},
        {text: 'muški testeri', route: '/muški-testeri-55ml/page=1'},
        {text: 'ženski testeri', route: '/ženski-testeri-55ml/page=1'},
        {text: 'o nama', route: '/about'},
    ]

    const pages = pagesData.map((curPage, index) => {
        return <p key={index} onClick={() => window.location.href=`${curPage.route}`} target="_blank"> {curPage.text} </p>
    })

    const pagesData2 = [
        {text: 'politika privatnosti', route: '/privacy'},
        {text: 'uslovi kupovine', route: '/terms-of-use'},
        {text: 'reklamacije i povrati', route: '/refunds'},
    ]

    const pages2 = pagesData2.map((curPage, index) => {
        return <p key={index} onClick={() => window.location.href=`${curPage.route}`} target="_blank"> {curPage.text} </p>
    })

    return <footer className="Footer">
                <div className="Footer-contact">
                    <p style={{color: '#fff'}}>Kontakt:</p>
                      { contactItems }
                </div>
                <div className="Footer-pages"> 
                <p style={{color: '#fff'}}>Brzi linkovi:</p>
                      { pages }
                </div>
                <div className="Footer-pages"> 
                <p style={{color: '#fff'}}>Polise:</p>
                      { pages2 }
                </div>
                <div className="Footer-logo" style={{marginTop:"50px", color: "#fff"}}>
                  <h5 style={{lineHeight:"0px"}}>All rights Reserved by Vestige Trade Ltd.</h5>
                     <img  src={require(`../../assets/images/logo.png`)}/>
                </div>
           </footer>
}

export default Footer;