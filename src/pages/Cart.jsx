import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import { useEffect, useState } from "react";

const Cart = () => {

  const cart = useSelector((state) => state);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr, 0))
  }, [cart])


  return (
    <div className="cart_container">
      {
        cart.lengthh > 0 ?
          (
            <div className="cart_box">
              <div className="left_content">
                {
                  cart.map((item, index) => {
                    return <CartItems key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="right_content">
                <div>
                  <div className="right_content_heading">
                    Your Cart
                  </div>
                  <div className="right_content_summary">
                    Summary
                  </div>
                  <p>
                    <span>
                      Total Items: {cart.length}
                    </span>
                  </p>
                </div>
                <div>
                  <p><span> Total : {total} </span></p>
                  <button>Check Out</button>
                </div>
              </div>

            </div>
          ) :
          (
            <div className="cart_box">
              <h2> Cart is Empty</h2>
              <Link to="/">Shop Now</Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart