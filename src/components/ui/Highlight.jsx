import React from "react";


const Highlight = ({icon, title, desc}) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">{desc}</p>
    </div>
  );
};

export default Highlight;
