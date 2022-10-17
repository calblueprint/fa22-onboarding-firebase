import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
import { Item } from "../../types/schema";
import { db } from "../firebaseConfig.js";

const itemsRef = collection(db, "items");

export const getAllItems = async (): Promise<Item[]> => {
    const promises: Promise<Item>[] = [];
    const docSnap = await getDocs(itemsRef);
    docSnap.forEach((item) => {
        promises.push(parseItem(item));
    })
    const allItems = await Promise.all(promises);
    // handle this
    return allItems;
}

export const addItem = async (item: Item): Promise<void> => {
    await addDoc(itemsRef, item);
    // handle this
}

export const updateCheckmark = async (item: Item, newChecked: boolean): Promise<void> => {
    const docRef = doc(db, "items", item.id);
    const data = {
        checked: newChecked
    }
    await updateDoc(docRef, data)
    // handle this
}


const parseItem = async (doc : any) => {
    const data = doc.data();
    const id = doc.id;
    const title = data.title;
    const content = data.content;
    const checked = data.checked;
    const item = {id, title, content, checked};
    return item as Item;
}