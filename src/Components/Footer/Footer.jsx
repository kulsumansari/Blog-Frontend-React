import React from 'react';
import styles from './Footer.module.css'
import Logo from '../Logo/Logo';
import { FooterData } from '../../data/data';
 
function Footer(){
    let {footerLinkHead , footerLinks}= FooterData
        return(
        <footer className={styles.footer}>
            <Logo />
            <div >
                <h3 className={styles.footerLinkHeader}>{footerLinkHead} </h3>
                {footerLinks.map((link)=>{
                    return <i className={`${styles.footerLink} ${link.linkclass}`}></i>
                })}
            </div>
        </footer>
    )
}

export default Footer;
