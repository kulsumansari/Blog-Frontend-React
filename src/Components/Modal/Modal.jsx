import styles from './modal.module.css'

export default function Modal(props){
    return(<>
    <div className={styles.modalOverlay}> </div>
     <div className={styles.modal}>
        <h2>
            {props.type==='ErrModal' && <i className='fa fa-close' style={{color:'red'}}></i>}
            {props.type==='LoadingModal' && <i className='fa fa-spinner' style={{color:'blue'}}></i>}
            {props.message}
        </h2>
    </div>
    </>)
}