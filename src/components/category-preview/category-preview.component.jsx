import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.style.scss";

const DirectoryItem = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default DirectoryItem;
