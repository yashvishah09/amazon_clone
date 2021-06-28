import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon logo' />
      </Link>

      {/* BEM covention  */}
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon ' />
      </div>

      <div className='header__nav'>
        <div className='header__Option'>
          <span className='header__optionLineOne'> Hello Guest,</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__Option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__Option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <ShoppingCartIcon />
          <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
