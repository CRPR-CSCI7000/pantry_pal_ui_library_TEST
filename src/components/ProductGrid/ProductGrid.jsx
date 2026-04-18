/**
 * ProductGrid component — renders a grid of product cards.
 *
 * Props:
 *   data        - array of product items:
 *                 { id, name, expiry, image, quantity }
 *   onItemClick - (item) => void  — called when card body is clicked
 *   onDelete    - (item) => void  — called when delete icon is clicked
 *                 (if omitted the delete icon is hidden)
 */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProductGrid.css";

const ProductCard = ({ item, onItemClick, onDelete }) => {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(item.id);
  };

  return (
    <div
      className="pp-product-card"
      onClick={() => onItemClick && onItemClick(item)}
    >
      {onDelete && (
        <div className="pp-delete-icon-container" onClick={handleDeleteClick}>
          <DeleteIcon className="pp-delete-icon" />
        </div>
      )}
      <img src={item.image} alt={item.name} className="pp-product-image" />
      <h3 className="pp-product-name">{item.name}</h3>
      {item.quantity && <p className="pp-product-quantity">{item.quantity}</p>}
      <p className="pp-product-expiry">Expiry: {item.expiry}</p>
    </div>
  );
};

const ProductGrid = ({ data = [], onItemClick, onDelete }) => {
  return (
    <div className="pp-product-grid">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
