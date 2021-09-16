import { navData } from '../../data/data'
import styles from './NavBar.module.css';
import Logo from '../Logo/Logo';

function NavBar(props){
    let {logo, navLinks} = navData;
    return(
         <div className={styles.navigation}>
             
             <Logo companyName={logo.title}/>
                             
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