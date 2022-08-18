import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to="/products/add" className="button is-small is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((i, index) => (
            <tr key={i.uuid}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.price}</td>
              <td>{i.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${i.uuid}`}
                  className="button is-small is-info mr-1"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(i.uuid)}
                  className="button is-small is-danger"
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

export default Productlist;
