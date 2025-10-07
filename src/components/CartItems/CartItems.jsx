import "./CartItems.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(AppContext);
  return (
    <div className="cart-items-container">
      {cartItems.length === 0 ? (
        <div className="cart-items-empty">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-header">
                <h6 className="cart-item-name">{item.name}</h6>
                <p className="cart-item-price">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="cart-item-footer">
                <div className="cart-item-quantity-controls">
                  <button
                    className="cart-quantity-btn"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="cart-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-quantity-btn"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity + 1)
                    }
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.itemId)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
