import "./Explore.css";
import { useContext, useState, useCallback, useMemo } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../components/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";

const Explore = () => {
  const { categories } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    mobileNumber: "",
  });

  // Memoized category selection handler
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // Memoized customer details update
  const updateCustomerDetails = useCallback((field, value) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  // Memoized filtered categories
  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [categories, selectedCategory]);

  return (
    <div className="explore-container text-light">
      <div className="left-column">
        <div className="first-row">
          <DisplayCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategorySelect}
            categories={filteredCategories}
          />
        </div>
        <hr className="horizontal-line" />
        <div className="second-row">
          <DisplayItems
            selectedCategory={selectedCategory}
            key={selectedCategory} // Force re-render on category change
          />
        </div>
      </div>
      <div className="right-column">
        <div className="customer-form-container">
          <CustomerForm
            customerName={customerDetails.customerName}
            mobileNumber={customerDetails.mobileNumber}
            setMobileNumber={(value) =>
              updateCustomerDetails("mobileNumber", value)
            }
            setCustomerName={(value) =>
              updateCustomerDetails("customerName", value)
            }
          />
        </div>
        <hr className="my-3 text-light" />
        <div className="cart-items-container">
          <CartItems />
        </div>
        <div className="cart-summary-container">
          <CartSummary
            customerName={customerDetails.customerName}
            mobileNumber={customerDetails.mobileNumber}
            setMobileNumber={(value) =>
              updateCustomerDetails("mobileNumber", value)
            }
            setCustomerName={(value) =>
              updateCustomerDetails("customerName", value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
