import "./CustomerForm.css";

const CustomerForm = ({
  customerName,
  mobileNumber,
  setMobileNumber,
  setCustomerName,
}) => {
  return (
    <div className="customer-form-container">
      <div className="customer-form-group">
        <label htmlFor="customerName" className="customer-form-label">
          Customer name
        </label>
        <input
          type="text"
          className="customer-form-input"
          id="customerName"
          placeholder="Enter customer name"
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
          required
        />
      </div>
      <div className="customer-form-group">
        <label htmlFor="mobileNumber" className="customer-form-label">
          Mobile number
        </label>
        <input
          type="tel"
          className="customer-form-input"
          id="mobileNumber"
          placeholder="Enter mobile number"
          onChange={(e) => setMobileNumber(e.target.value)}
          value={mobileNumber}
          pattern="[0-9]{10}"
          required
        />
      </div>
    </div>
  );
};

export default CustomerForm;
