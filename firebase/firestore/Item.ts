import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { Item } from "../../types/schema";
import { db } from "../firebaseConfig.js";

const itemsRef = collection(db, "items");

export const getAllItems = async (): Promise<Item[]> => {
    // handle this
    return [];
}

export const addItem = async (item: Item): Promise<void> => {
    // handle this

}

export const updateCheckmark = async (itemId: string, checked: boolean): Promise<void> => {
    // handle this
}


const parseItem = async (doc : any) => {
    const data = doc.data();
    const title = data.title;
    const content = data.content;
    const checked = data.checked;
    const item = {title, content, checked};
    return item as Item;
}