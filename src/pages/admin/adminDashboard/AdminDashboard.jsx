import React, { useState } from "react";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="">
            <h1>Admin Dashboard</h1>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Product
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form action="/">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Name
                        </label>
                        <input
                          className="form-control"
                          placeholder="Product Name"
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="productDescription" className="form-label">
                          Product Description
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Price
                        </label>
                        <input
                          className="form-control"
                          placeholder="Product Price"
                          onChange={(e) => setProductPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Category
                        </label>
                        <select
                          className="form-control"
                          onChange={(e) => setProductCategory(e.target.value)}
                        >
                          <option value="1">Flower</option>
                          <option value="2">Category 2</option>
                          <option value="3">Category 3</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                          onChange={(e) => setProductImage(e.target.value)}
                        >
                          Product Image
                        </label>
                        <input
                          onChange={handleImageChange}
                          className="form-control"
                          type="file"
                        />
                      </div>
                      {previewImage && (
                        <div className="mb-2">
                          <img
                            src={previewImage}
                            className="img-fluid rounded"
                            alt="product"
                          />
                        </div>
                      )}
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="product"
                  width="50px"
                />
              </td>
              <td>Product 1</td>
              <td>$100</td>
              <td>Created a product</td>
              <td>Category 1</td>
              <td>
                <a href="/edit" className="btn btn-primary">
                  Edit
                </a>
                <a href="/delete" className="btn btn-danger">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
