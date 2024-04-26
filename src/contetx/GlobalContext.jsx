import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const GloabalProvaider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);
  const [users, setUsers] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [open, setopen] = useState(false);


  const openDelete = (user) => {
    setShow(true);
    setDeletedItem(user);
  };
  const closeDelete = () => {
    setShow(false);
    setDeletedItem(null);
  };
  const openModal = (user) => {
    setopen(true);
    setEditedItem(user);
  };
  const closeModal = () => {
    setopen(false);
    setEditedItem(null);
  };


  const contextValue = {
    show,
    setShow,
    openDelete,
    closeDelete,
    deletedItem,
    users,
    setUsers,
    openModal,
    closeModal,
    editedItem,
    open,
   
    
  };

  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};
const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext, GloabalProvaider };
