import "./Explore.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../components/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";

const Explore = () => {
  const { categories } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  return (
    <div className="explore-container text-light">
      <div className="left-column">
        <div className="first-row">
          <DisplayCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
        <hr className="horizontal-line" />
        <div className="second-row">
          <DisplayItems selectedCategory={selectedCategory} />
        </div>
      </div>
      <div className="right-column">
        <div className="customer-form-container">
          <CustomerForm
            customerName={customerName}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            setCustomerName={setCustomerName}
          />
        </div>
        <hr className="my-3 text-light" />
        <div className="cart-items-container">
          <CartItems />
        </div>
        <div className="cart-summary-container">
          <CartSummary
            customerName={customerName}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            setCustomerName={setCustomerName}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
