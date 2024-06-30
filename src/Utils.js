import { ref, set, onValue } from "firebase/database";
import { db_database } from "./FIrebaseConfig";

export const addKeyInDB = async (id, setInputText, value) => {
  try {
    await set(ref(db_database, "notes/" + id), {
      text: value,
    });
    getData(id, setInputText);
  } catch (error) {
    console.error("Error adding key to the database:", error);
  }
};

export const getData = (id, setInputText) => {
  const notesData = ref(db_database, "notes/" + id);
  const unSub = onValue(notesData, (snapshot) => {
    const data = snapshot.val();
    if (data && data.text) {
      setInputText(data.text);
    }
  });

  return () => {
    unSub();
  };
};
