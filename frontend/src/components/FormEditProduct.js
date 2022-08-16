import React from "react";

const FormEditProduct = () => {
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Update a product</h2>
      <div className="card p-2 mr-2 is-shadowless">
        <div className="content">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input type="number" className="input" placeholder="Price" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-success is-fullwidth">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
