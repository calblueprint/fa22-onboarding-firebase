import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
import { Item } from "../../types/schema";
import { db } from "../firebaseConfig.js";

const itemsRef = collection(db, "items");

export const getAllItems = async (): Promise<Item[]> => {
    try {
      const itemsRef = collection(db, "items");
      const promises: Promise<Item>[] = [];
      const docSnap = await getDocs(itemsRef);
      docSnap.forEach((item) => {
        promises.push(parseItem(item))

      })
    const items = await Promise.all(promises);
    return items;
    } catch (e) {
      console.warn(e);
      throw e;
    }
};

export const addItem = async (item: Item): Promise<void> => {
  try {
    const itemsRef = collection(db, "items");
    await addDoc(itemsRef, item)
  } catch (e) {
    console.warn(e);
    throw e;
  }

}

export const updateCheckmark = async (item: Item, newChecked: boolean): Promise<void> => {
    const docRef = doc(db, "items", item.id);
    // This data object changes the fields that are different from the entry in backend!
    const data = {
        checked: newChecked
    }
    await updateDoc(docRef, data)
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