import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./features/cart/CartContainer";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
