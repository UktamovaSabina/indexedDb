import { openDB } from 'idb';

const DB_NAME = 'shopping_cart';
const DB_VERSION = 1;
const STORE_NAME = 'cart';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  }
});

export const getCartItems = async () => {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
};

export const addItemToCart = async (item) => {
  const db = await dbPromise;
  return db.add(STORE_NAME, item);
};

export const deleteCartItem = async (id) => {
  const db = await dbPromise;
  return db.delete(STORE_NAME, id);
};
