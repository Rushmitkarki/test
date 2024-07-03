/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getProductCount, pagination } from '../../api/api';
import ProductCard from '../../components/ProductCard';

const Homepage = () => {
  // Print Hello, when page load (automatic)
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    getProductCount()
      .then((res) => {
        const count = res.data.productCount;
        setTotalPages(Math.ceil(count / 2));
        console.log(count);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    pagination(page)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  const handlePagination = (id) => {
    setPage(id);
    pagination(id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <>
      <div className='container'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='true'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0'
                className='d-block  mx-auto'
                alt='...'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://th.bing.com/th/id/OIP.nyLAzWYdvc-wb9ntq1cU7QHaHa?rs=1&pid=ImgDetMain'
                className='d-block  mx-auto'
                alt='...'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='https://images4.alphacoders.com/115/thumb-1920-115716.jpg'
                className='d-block mx-auto'
                alt='...'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleRide'
            data-bs-slide='prev'>
            <span
              class='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleRide'
            data-bs-slide='next'>
            <span
              class='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
        <h2 className='mt-5'>Available Products</h2>
        <div className='mb-5 pb-5'>
          <div class='row row-cols-1 row-cols-md-4 g-4'>
            {error
              ? () => {
                  return <h1>{error}</h1>;
                }
              : products.map((product) => (
                  <div class='col'>
                    <ProductCard
                      product={product}
                      color='red'
                    />
                  </div>
                ))}
          </div>
          <nav
            aria-label='Page navigation example'
            className=''>
            <ul class='pagination justify-content-center'>
              <li class='page-item'>
                <button
                  className={page === 1 ? 'page-link disabled' : 'page-link'}
                  onClick={() => {
                    handlePagination(1);
                  }}>
                  First
                </button>
              </li>
              <li class='page-item'>
                <button
                  className={page === 1 ? 'page-link disabled' : 'page-link'}
                  onClick={() => {
                    handlePagination(page - 1);
                  }}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li class='page-item'>
                  <button
                    class='page-link'
                    onClick={() => {
                      handlePagination(i + 1);
                    }}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li class='page-item'>
                <button
                  className={
                    page === totalPages ? 'page-link disabled' : 'page-link'
                  }
                  onClick={() => {
                    handlePagination(page + 1);
                  }}>
                  Next
                </button>
              </li>
              <li class='page-item'>
                <button
                  className={
                    page === totalPages ? 'page-link disabled' : 'page-link'
                  }
                  onClick={() => {
                    handlePagination(totalPages);
                  }}>
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Homepage;
