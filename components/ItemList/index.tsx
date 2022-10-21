import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { updateCheckmark } from '../../firebase/firestore/Item';
import { Item } from '../../types/schema';
import styles from './ItemList.module.css';

interface ItemListTypes {
    item: Item;
}

const ItemList = ({item}: ItemListTypes) => {

    const [isChecked, setIsChecked] = useState(item.checked);

    const handleCheck = () => {
        let newChecked = !isChecked
        setIsChecked(newChecked)
        //update in the backend using the updateCheckmark function!
        updateCheckmark(item, newChecked)
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