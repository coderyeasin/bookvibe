import Swal from "sweetalert2";

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
      // alert("Item already in the list");
      Swal.fire({
        title: "Error!",
        text: "This Book already in the list",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    } else {
      storedItems.push(id);
      localStorage.setItem("readList", JSON.stringify(storedItems));
    }
  } catch (error) {
    console.error(`Error setting item ${id} in localStorage`, error);
  }
};

const removeFromLocalStorage = (id) => {
  try {
    const storedItems = getItem();
    const updatedItems = storedItems.filter(
      (itemId) => String(itemId) !== String(id)
    );
    localStorage.setItem("readList", JSON.stringify(updatedItems));
  } catch (error) {
    console.error(`Error removing item ${id} from localStorage`, error);
  }
};
export { getItem, AddToLocalStorage, removeFromLocalStorage };
