/**
 * Card component.
 *
 * Props:
 *   children - card content; a <CardHeader> child is rendered outside the body wrapper
 */
import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import "./Card.css";

const Card = ({ children }) => {
  const header = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === CardHeader,
  );
  const bodyChildren = React.Children.toArray(children).filter(
    (child) => !(React.isValidElement(child) && child.type === CardHeader),
  );

  return (
    <div className="pp-card-container">
      {header}
      <div className="pp-body-container">{bodyChildren}</div>
    </div>
  );
};

export default Card;
