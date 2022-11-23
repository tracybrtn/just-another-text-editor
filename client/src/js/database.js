import { openDB } from 'idb';

//Creating a new database called 'jate_db'
const initdb = async () =>
  openDB('jate_db', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate store already exists');
        return;
      }
      //Create a new object store for the data, give it the key name of 'id' and set it to increment automatically
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate store created');
    },
  });

//UPDATE function to add text
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate_db', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  //Use the put(update) method
  const request = store.put({ id: 1, value: content });

  //get confirmation of request
  const result = await request;
  console.log('data saved to the database', result);
};

//GET function
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate_db', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  //Use the getAll() method to get data
  const request = store.get(1);

  //get confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
