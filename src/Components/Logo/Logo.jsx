
import styles from './Logo.module.css'
import companyLogo from './companyLogo.png';

export default function Logo(props){
    return(
            <div className={styles.companyLogo}>
                <img src={companyLogo} alt='company Logo' />
                <h1>{props.companyName}</h1>
                
            </div>
    )
}