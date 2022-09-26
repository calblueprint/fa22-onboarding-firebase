import React from 'react';
import styles from './ItemHeader.module.css';

const ItemHeader = () => {

    return (
        <div className={styles.container}>
            <div>
                Title
            </div>
            <div>
                Content
            </div>
            <div>
                Checked
            </div>
        </div>
    )
}

export default ItemHeader;