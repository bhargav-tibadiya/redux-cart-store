import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({post}) => {

  const [selected, setSelected] = useState(true)
  return (
    <div className="product_container">
      <div className="product_title">
        <p>{post.title}</p>
      </div>
      <div className="product_image">
        <img src={post.image} alt="" />
      </div>
      <div className="product_price">
        <img src={post.price} alt="" />
      </div>
      <div className="product_button">
        <button>
          {
            selected ? <p>Remove Item</p> : <p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  )
}

export default Product

Product.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};