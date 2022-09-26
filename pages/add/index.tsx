import React, {useState} from 'react';
import styles from './Add.module.css';
import Link from 'next/link'
import { TextField, Button } from '@mui/material';
import { Item } from '../../types/schema';
import { addItem } from '../../firebase/firestore/Item';

const AddPage = () => {

    const [titleField, setTitleField] = useState("");
    const [contentField, setContentField] = useState("");

    const handleSubmit = () => {
        //handle this code!
        if (titleField != "" && contentField != "") {
            const newItem = {
                title: titleField,
                content: contentField,
                checked: false,
            }
            addItem(newItem as Item);
            
        }

        console.log(titleField);
        console.log(contentField);
    }

    return (
        <>
            <div className={styles.link}>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    Here we'll add items!
                </div>
                <TextField id="standard-basic" label="title" variant="standard" 
                    onChange={(event) => setTitleField(event.target.value)}/>
                <TextField id="standard-basic" label="content" variant="standard"
                    onChange={(event) => setContentField(event.target.value)}/>
                <div className={styles.button}>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default AddPage;