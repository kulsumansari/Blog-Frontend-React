import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BlogComponent.module.css'


function RelatedLinks(props){
    return(
        <div className={styles.relatedLinks}>
        {props.relatedLinks ?
                <div>
                    <h1>Related Links</h1>
                    <ul>
                        {props.relatedLinks.map((link)=>{
                            return <li key = {link.id} className={styles.linkList}>
                                <Link to={`/${link.href}`}> <p> {link.title} </p> </Link>
                            </li>
                        })}
                    </ul>
                </div>
                : <br/>
            }
        </div>
    )
}

export default RelatedLinks;
