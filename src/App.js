import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./features/cart/CartContainer";

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
