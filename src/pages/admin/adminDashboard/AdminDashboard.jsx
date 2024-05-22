import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr className="table-dark">
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
                src="https://picsum.photos/200/300"
                alt="product"
                width="50px"
                height="50px"
              />
            </td>
            <td>Product 1</td>
            <td>$100</td>
            <td>This is good product</td>
            <td>Category 1</td>
            <td>
              <a href="/edit" class="btn btn-primary">
                Edit
              </a>
              <a href="/delete" class="btn btn-danger">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminDashboard;
