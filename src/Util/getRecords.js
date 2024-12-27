import { database } from "../Config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getRecords = async () => {
  try {
    const records = await getDocs(collection(database, "records"));
    const filtered = records.docs.map((doc) => {
      return doc.data();
    });
    return filtered;
  } catch (error) {
    console.log(error);
  }
};
