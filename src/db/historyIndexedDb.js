import { openDB } from 'idb';

const DB_NAME = 'transaction_history';
const DB_VERSION = 1;
const STORE_NAME = 'history';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  }
});

export const getHistories = async () => {
  const db = await dbPromise;
  const data = await db.getAll(STORE_NAME);
  return data
};

export const addHistory = async (item) => {
  const db = await dbPromise;
  return db.add(STORE_NAME, item);
};

export const deleteHistory = async (id) => {
  const db = await dbPromise;
  return db.delete(STORE_NAME, id)
};
