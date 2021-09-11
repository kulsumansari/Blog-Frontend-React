import styles from './Logo.module.css'

export default function Logo(props){
    return(
            <div className={styles.companyLogo}>
                <h1>
                    <span>B</span>
                    <span className={styles.reverseColor}>G</span>
                     {props.title}
                </h1>
            </div>
    )
}