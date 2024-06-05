import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createProductApi, getAllProductsApi } from "../../../apis/api";

const AdminDashboard = () => {
  //  state for all fetch products
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  // use Effect geting form api.js (get all product)
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        // response : res.data.products (all products)
        if (res.status === 201) {
          setProducts(res.data.products);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // handle submmit immage
  const handleSubmit = (e) => {
    e.preventDefault();

    //  make a form data object(text , file)
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productImage", productImage);

    // make a api call
    createProductApi(formData)
      .then((res) => {
        // for successfull api
        if (res.status === 201) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        // for error status code
        if (error.response) {
          if (error.response.status === 400) {
            toast.warning(error.response.data.message);
          } else if (error.response.status === 500) {
            toast.error(error.response.data.message);
          }
        } else {
          toast.error("Something went wrong!");
        }
      });
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
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
              {/* Comment */}
            </tr>
          </thead>
          <tbody>
            {products.map((singleProduct) => (
              <tr>
                <td>
                  <img
                    src={`http://localhost:5000/products/${singleProduct.productImage}`}
                    alt="product"
                    width="50px"
                  />
                </td>
                <td>{singleProduct.productName}</td>
                <td>{singleProduct.productPrice}</td>
                <td>{singleProduct.productDescription}</td>
                <td>{singleProduct.productCategory}</td>
                <td>
                  <Link
                    to={"/admin/update/" + singleProduct._id}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <a href="/delete" className="btn btn-danger">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
