import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
import { Item } from "../../types/schema";
import { db } from "../firebaseConfig.js";

const itemsRef = collection(db, "items");

export const getAllItems = async (): Promise<Item[]> => {
    // handle this
    const promises: Promise<Item>[] = [];
    const docSnap = await getDocs(itemsRef);
    docSnap.forEach((item) => {
        promises.push(parseItem(item));
    })
    const items = await Promise.all(promises);
    return items;
}

export const addItem = async (item: Item): Promise<void> => {
    // handle this
    await addDoc(itemsRef, item);
}

export const updateCheckmark = async (item: Item, newChecked: boolean): Promise<void> => {
    // handle this
    const docRef = doc(db, "items", item.id);
    const data = {
        checked: newChecked
    }
    await updateDoc(docRef, data);
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