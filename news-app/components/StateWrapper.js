import { createContext, useContext, useState } from "react";
const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  CloseCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => {},
  removeOneQty: (item) => {},
  deleteProduct: (item) => {},
});

export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function handleDeleteProduct({ id }) {
    const temp = [...items];
    const ele = temp.filter((e) => e.id !== id);
    setItems([...ele]);
  }

  function handleRemoveOneQty(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);
    if (found && found.qty > 1) {
      found.qty--;
    }
    setItems([...temp]);
  }
  function handleOpenCart() {
    setIsOpen(true);
  }
  function handleCloseCart() {
    setIsOpen(false);
  }
  function handleaddItemToCart(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
  }

  function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty, 0);
    return total;
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        CloseCart: handleCloseCart,
        addItemToCart: handleaddItemToCart,
        getNumberOfItems: handleNumberOfItems,
        removeOneQty: handleRemoveOneQty,
        deleteProduct: handleDeleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
