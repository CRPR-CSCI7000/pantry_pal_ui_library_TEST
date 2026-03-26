/**
 * DetailLine component — collapsible section divider.
 *
 * Props:
 *   title             - section label string
 *   isCollapsed       - boolean
 *   onToggleCollapse  - () => void
 */
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./DetailLine.css";

const DetailLine = ({ title, isCollapsed, onToggleCollapse }) => {
  return (
    <div className="pp-detail-line">
      <div className="pp-title-container" onClick={onToggleCollapse}>
        <KeyboardArrowDownIcon
          className={`pp-chevron-icon ${isCollapsed ? "pp-rotated" : ""}`}
        />
        <span>{title}</span>
      </div>
      <div className="pp-line" />
    </div>
  );
};

export default DetailLine;
