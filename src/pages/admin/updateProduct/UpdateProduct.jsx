import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProductApi } from "../../../apis/api";

const UpdateProduct = () => {
  // Get the id from the URL
  const { id } = useParams("id");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Fetch the product details from the API
    getSingleProductApi(id).then((res) => {
      console.log(res.data.product);
      setProductName(res.data.product.productName);
      setProductDescription(res.data.product.productDescription);
      setProductPrice(res.data.product.productPrice);
      setProductCategory(res.data.product.productCategory);
      setProductImage(res.data.product.productImage);
    });
    // set the product details to the state
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="container">
        <div>
          <h2 className="text-center mb-4">Update Product For</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Product Name
                </label>
                <input
                  className="form-control"
                  placeholder="Product Name"
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
              </div>
              <div className="mb-3">
                <label for="productDescription" className="form-label">
                  Product Description
                </label>
                <textarea
                  className="form-control"
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows="3"
                  value={productDescription}
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Product Price
                </label>
                <input
                  className="form-control"
                  placeholder="Product Price"
                  onChange={(e) => setProductPrice(e.target.value)}
                  value={productPrice}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Product Category
                </label>
                <select
                  className="form-control"
                  onChange={(e) => setProductCategory(e.target.value)}
                  defaultValue={productCategory}
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
              <div className="">
                <button
                  type="submit"
                  className="btn btn-danger btn-block w-100 "
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
          <div className="col-8">
            {previewImage ? (
              <div className="mb-2">
                <img
                  src={previewImage}
                  className="img-fluid rounded w-100 h-50"
                  alt="product"
                />
              </div>
            ) : (
              <div className="mb-2">
                <img
                  src={`http://localhost:5000/products/${productImage}`}
                  className="img-fluid rounded w-100 h-50"
                  alt="product"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
