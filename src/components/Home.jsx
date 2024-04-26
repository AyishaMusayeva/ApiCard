import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GetUsers, DeleteUser } from "../Api/requests";
import { ROUTER } from "../constant/router";
import { useGlobalContext } from "../contetx/GlobalContext";
import DeleteModal from "./DeletModal";
import { toast } from "react-toastify";
import EditUser from "./EditModal";

const Home = () => {
  const {
    openDelete,
    closeDelete,
    users,
    setUsers,
    openModal,
    closeModal,
    editedItem,
  } = useGlobalContext();

  const fetchUsers = async () => {
    const response = await GetUsers();
    setUsers(response);
  };
  const deleteUser = async (userId) => {
    await DeleteUser(userId);
    fetchUsers();
    toast.success("deleted successfully", {
      autoClose: 1500,
    });
    closeDelete();
  };

  useEffect(() => {
    fetchUsers();
  }, [closeModal]);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white my-3">User List</h1>
        <DeleteModal deleteUser={deleteUser} />
        {editedItem && <EditUser />}
        <table className="table table-striped w-75 fs-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>FullName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Position</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      openModal(user);
                    }}
                  >
                    Modal
                  </button>
                  <Link
                    className="btn btn-primary"
                    to={`${ROUTER.UpdateUser}/${user.id}`}
                  >
                    Page
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => openDelete(user)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`${ROUTER.Info}/${user.id}`}
                    className="btn btn-info text-white"
                  >
                    Info
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
