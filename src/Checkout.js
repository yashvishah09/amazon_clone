import React from 'react';

import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />

        <div>
          <h3>{user && `Hello ${user.email}`}</h3>
          <h2 className='checkout__title'>
            <div>Your shopping basket</div>
          </h2>

          {basket.map((item) => (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
