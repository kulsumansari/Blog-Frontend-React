import { navData } from './data/data'

import styles from './NavBar.module.css';

function NavBar(props){
    let { navLinks} = navData;
    return(
         <div className={styles.navigation}>
            <div className={styles.companyLogo}>
                <h1>
                    <span>B</span>
                    <span className={styles.reverseColor}>G</span>
                     BloGet
                </h1>
            </div>
            <div className={styles.hamburgerMenu}>
                <i className='fa fa-bars'></i>
            </div>
            
            <ul className={styles.navContainer}> 
                {
                    navLinks.map((link)=>{
                        return <li key={link.linkId} className={styles.navItem}>
                            {
                                <a href={link.href} className={styles.navLink+ (link.isCta? ` ${styles.btn}`:'')}  > {link.link} </a>
                            }
                        </li>
                    })
                }
        </ul>
      </div>
    )
}
export default NavBar;