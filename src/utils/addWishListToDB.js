const getWishList = () => {
  try {
    const item = localStorage.getItem("wishList");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Error getting item  from localStorage`, error);
    return [];
  }
};

const AddWishListToLocalStorage = (id) => {
  try {
    const storedItems = getWishList();
    if (storedItems.includes(id)) {
      alert("WishList already in the list");
      return;
    } else {
      storedItems.push(id);
      localStorage.setItem("wishList", JSON.stringify(storedItems));
      alert("Item added to the list");
    }
  } catch (error) {
    console.error(`Error setting item ${id} in localStorage`, error);
  }
};

const removeWishListFromLocalStorage = (id) => {
  try {
    const storedItems = getWishList();
    const updatedItems = storedItems.filter((itemId) => itemId !== id);
    localStorage.setItem("wishList", JSON.stringify(updatedItems));
    alert("Item removed from the list");
  } catch (error) {
    console.error(`Error removing item ${id} from localStorage`, error);
  }
};
export {
  getWishList,
  AddWishListToLocalStorage,
  removeWishListFromLocalStorage,
};
