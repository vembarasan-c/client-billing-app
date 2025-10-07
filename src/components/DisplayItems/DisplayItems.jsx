import "./DisplayItems.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import Item from "../Item/Item.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

const DisplayItems = ({ selectedCategory }) => {
  const { itemsData } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");

  const filteredItems = itemsData
    .filter((item) => {
      if (!selectedCategory) return true;
      return item.categoryId === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className="display-items-container">
      <div className="display-items-header">
        {filteredItems.length > 0 && (
          <div className="display-items-count">
            {filteredItems.length} Items
          </div>
        )}
        <div>
          <SearchBox onSearch={setSearchText} />
        </div>
      </div>
      {filteredItems.length > 0 ? (
        <div className="display-items-grid">
          {filteredItems.map((item, index) => (
            <div key={index}>
              <Item
                itemName={item.name}
                itemPrice={item.price}
                itemImage={item.imgUrl}
                itemId={item.itemId}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="display-items-empty">No items found</div>
      )}
    </div>
  );
};

export default DisplayItems;
