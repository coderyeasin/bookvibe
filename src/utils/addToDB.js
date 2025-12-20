const getItem = () => {
  try {
    const item = localStorage.getItem("readList");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Error getting item  from localStorage`, error);
    return [];
  }
};

const AddToLocalStorage = (id) => {
  try {
    const storedItems = getItem();
    if (storedItems.includes(id)) {
      alert("Item already in the list");
      return;
    } else {
      storedItems.push(id);
      localStorage.setItem("readList", JSON.stringify(storedItems));
      alert("Item added to the list");
    }
  } catch (error) {
    console.error(`Error setting item ${id} in localStorage`, error);
  }
};
export { getItem, AddToLocalStorage };
