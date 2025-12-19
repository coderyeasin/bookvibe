const getItem = (id) => {
  try {
    const item = localStorage.getItem(id);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item ${id} from localStorage`, error);
    return null;
  }
};

const AddToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item ${key} in localStorage`, error);
  }
};
export { getItem, AddToLocalStorage };
