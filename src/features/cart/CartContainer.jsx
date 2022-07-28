import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../modal/modalSlice";
import CartItem from "./CartItem";
import { calculateTotal } from "./cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Your cart</h2>
      </header>

      {/* cart items */}
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
