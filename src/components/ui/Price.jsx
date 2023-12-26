import React from "react";


const Price = ({originalPrice, salePrice}) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <div>
          <span className="book__price--normal">${originalPrice}</span>$
          {salePrice.toFixed(2)}
        </div>
      ) : (
        <div>${originalPrice.toFixed(2)}</div>
      )}
    </div>
  );
};

export default Price;
