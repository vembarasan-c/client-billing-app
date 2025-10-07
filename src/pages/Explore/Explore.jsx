import "./Explore.css";
import { useContext, useState, useCallback, useMemo } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../components/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";
import { ShoppingCart, Users, Grid, List } from "lucide-react";

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
          <div className="section-header">
            <Grid size={20} />
            <h4>Categories</h4>
          </div>
          <DisplayCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategorySelect}
            categories={filteredCategories}
          />
        </div>
        <hr className="horizontal-line" />
        <div className="second-row">
          <div className="section-header">
            <ShoppingCart size={20} />
            <h4>Items</h4>
          </div>
          <DisplayItems
            selectedCategory={selectedCategory}
            key={selectedCategory} // Force re-render on category change
          />
        </div>
      </div>
      <div className="right-column">
        <div className="customer-form-container">
          <div className="section-header">
            <Users size={20} />
            <h4>Customer Details</h4>
          </div>
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
          <div className="section-header">
            <List
             size={20} />
            <h4>Cart Items</h4>
          </div>
          <CartItems />
        </div>
        <div className="cart-summary-container">
          <div className="section-header">
            <ShoppingCart size={20} />
            <h4>Cart Summary</h4>
          </div>
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
