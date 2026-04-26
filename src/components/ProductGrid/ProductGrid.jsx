/**
 * ProductGrid component — renders a grid or list of product cards.
 *
 * Props:
 *   data        - array of product items:
 *                 { id, name, expiry, image, quantity }
 *   onItemClick - (item) => void — called when card body is clicked
 *   onDelete    - (item.id) => void — called with the item id when delete icon clicked
 *                 (if omitted the delete icon is hidden)
 *   viewMode    - "grid" | "list"  (default: "grid")
 *   loading     - boolean — renders skeleton placeholders when true
 *   emptyState  - ReactNode — rendered when data is empty and not loading
 */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProductGrid.css";

// ─── Skeleton ──────────────────────────────────────────────────────────────────

const SkeletonCard = () => (
  <div className="pp-product-card pp-product-card--skeleton" aria-hidden="true">
    <div className="pp-product-card__image pp-product-card__image--skeleton" />
    <div className="pp-product-card__name pp-product-card__name--skeleton" />
    <div className="pp-product-card__expiry pp-product-card__expiry--skeleton" />
  </div>
);

// ─── Card ──────────────────────────────────────────────────────────────────────

const ProductCard = ({ item, onItemClick, onDelete, viewMode }) => {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(item.id);
  };

  return (
    <div
      className={`pp-product-card pp-product-card--${viewMode}`}
      onClick={() => onItemClick && onItemClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onItemClick && onItemClick(item)}
    >
      {onDelete && (
        <div
          className="pp-product-card__delete"
          onClick={handleDeleteClick}
          aria-label="Delete item"
        >
          <DeleteIcon className="pp-product-card__delete-icon" />
        </div>
      )}
      <img
        src={item.image}
        alt={item.name}
        className="pp-product-card__image"
        loading="lazy"
      />
      <h3 className="pp-product-card__name">{item.name}</h3>
      {item.quantity && (
        <p className="pp-product-card__quantity">{item.quantity}</p>
      )}
      <p className="pp-product-card__expiry">Expiry: {item.expiry}</p>
    </div>
  );
};

// ─── Grid ──────────────────────────────────────────────────────────────────────

const SKELETON_COUNT = 6;

const ProductGrid = ({
  data = [],
  onItemClick,
  onDelete,
  viewMode = "grid",
  loading = false,
  emptyState = null,
}) => {
  if (loading) {
    return (
      <div className={`pp-product-grid pp-product-grid--${viewMode}`}>
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="pp-product-grid__empty">
        {emptyState || <p>No items found.</p>}
      </div>
    );
  }

  return (
    <div className={`pp-product-grid pp-product-grid--${viewMode}`}>
      {data.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          onDelete={onDelete}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
