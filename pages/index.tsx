import React, {useState, useEffect} from 'react';
import type { NextPage } from 'next'
import styles from './Home.module.css'
import ItemList from '../components/ItemList'
import ItemHeader from '../components/ItemHeader'
import Link from 'next/link'
import { getAllItems } from '../firebase/firestore/Item';
import { Item } from '../types/schema';

const Home: NextPage = () => {

  const [items, setItems] = useState([] as Item[])

  useEffect(() => {
    // use your getAllItems method to set our items variable when the page loads up!
    // remember that getAllItems returns a promise.
    
  }, [])

  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>
        Welcome to Jacob's Back End.
      </h1>
      <h4>
        (Get it its a butt joke)
      </h4>
      <Link href="/add">
        <a>Go to Add</a>
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ItemHeader />
          <div className={styles.list}>
            {
              items.map((item) => {
                return (
                  <ItemList item={item}/>
                )
              })
            }
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home
