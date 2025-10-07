import "./DisplayCategory.css";
import Category from "../Category/Category.jsx";
import { assets } from "../../assets/assets.js";

const DisplayCategory = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="display-category-container">
      <div className="category-column">
        <Category
          categoryName="All Items"
          imgUrl={assets.device}
          numberOfItems={categories.reduce((acc, cat) => acc + cat.items, 0)}
          bgColor="#6c757d"
          isSelected={selectedCategory === ""}
          onClick={() => setSelectedCategory("")}
        />
      </div>
      {categories.map((category) => (
        <div key={category.categoryId} className="category-column">
          <Category
            categoryName={category.name}
            imgUrl={category.imgUrl}
            numberOfItems={category.items}
            bgColor={category.bgColor}
            isSelected={selectedCategory === category.categoryId}
            onClick={() => setSelectedCategory(category.categoryId)}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayCategory;
