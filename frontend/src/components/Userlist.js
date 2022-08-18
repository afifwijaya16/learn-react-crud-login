import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Userlist = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http:://localhost:5000/users/${id}`);
    getUsers();
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of users</h2>
      <Link to="/users/add" className="button is-small is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={i.uuid}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.role}</td>
              <td>
                <Link
                  to={`/users/edit/${i.uuid}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                  onClick={(e) => deleteUser(i.uuid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
