import React, { useEffect, useState } from 'react';
import Card from '../productCard/Card';
import Carousel from '../carousel/Carousel';
import { Helmet } from 'react-helmet';
import { getAllProduct } from '../../slices/product/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import LoadingUi from '../loading/LoadingUi';
import MessageBox from 'react-bootstrap';
import MessageUi from '../message/MessageUi';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.allProducts);
  const Loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {Loading ? (
        <LoadingUi />
      ) : error ? (
        <MessageUi variant="danger">{error}</MessageUi>
      ) : (
        <section>
          <Carousel />

          <div className="container">
            <h1>Featured Product</h1>
            <div className="row">
              {data.map((item) => {
                return (
                  <div key={item.sale} className="col-lg-4 col-sm-6 col-xs-12">
                    <Card
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      slug={item.slug}
                      sale={item.sale}
                      rating={item.rating}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
