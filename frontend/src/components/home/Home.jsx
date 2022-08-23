import React from 'react';
import Card from '../productCard/Card';
import p1 from '../../assests/pic1.jpg';
import p2 from '../../assests/pic2.jpg';
import p3 from '../../assests/pic3.jpg';
import Carousel from '../carousel/Carousel';

const Home = () => {
  const data = [
    {
      title: 'Furniture',
      name: 'Raza',
      price: 4839,

      slug: 'raza',
      sale: 12,
    },
    {
      title: 'Furniture',
      name: 'Ansari',
      price: 4569,

      slug: 'ansari',
      sale: 10,
    },
    {
      title: 'Furniture',
      name: 'student',
      price: 4569,
      sale: 15,
      slug: 'demo',
    },
  ];
  return (
    <div>
      <Carousel />
      <h1>Featured Product</h1>
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <Card
                  title={item.title}
                  name={item.name}
                  price={item.price}
                  slug={item.slug}
                  sale={item.sale}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
