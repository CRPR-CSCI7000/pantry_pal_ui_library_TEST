/**
 * CardHeader component.
 *
 * Props:
 *   text    - heading string
 *   buttons - array of { text, onClick, variant }
 */
import React from "react";
import Button from "../Button/Button";
import "./CardHeader.css";

const CardHeader = ({ text, buttons = [] }) => {
  return (
    <div className="pp-card-header">
      <div className="pp-header-text">{text}</div>
      <div className="pp-header-buttons">
        {buttons.map(({ text: label, onClick, variant }, index) => (
          <Button key={index} variant={variant} onClick={onClick}>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CardHeader;
