import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Item } from '../../types/schema';
import styles from './ItemList.module.css';

interface ItemListTypes {
    item: Item;
}

const ItemList = ({item}: ItemListTypes) => {

    const [isChecked, setIsChecked] = useState(item.checked);

    const handleCheck = () => {
        setIsChecked(!isChecked)
        //update in the backend!
    }

    return (
        <div className={styles.container}>
            <div>
                {item.title}
            </div>
            <div>
                {item.content}
            </div>
            <div>
                <Checkbox onChange={handleCheck} checked={isChecked}/>
            </div>
        </div>
    )
}

export default ItemList;