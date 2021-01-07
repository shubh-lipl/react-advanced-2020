import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  const url = image && image.url

  return <article className='product'>
    <img src={url || defaultImage} alt={name} />
    <h4>{name || 'default Name'}</h4>
    <p>$ {price || 3.99}</p>
  </article>;
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

// Product.defaultProps = {
//   name: 'No name',
//   image: defaultImage,
//   price: 3.99
// }



export default Product;
