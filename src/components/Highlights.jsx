import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose this <span className="brown"> Book Store? </span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              title={<h3 className="highlight__subtitle">Easy and Quick</h3>}
              desc={
                <p className="highlight__para">
                  Get access to the books easily!
                </p>
              }></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
              title={<h3 className="highlight__subtitle">Heaps of Books</h3>}
              desc={
                <p className="highlight__para">
                  Books from all different Genres!
                </p>
              }></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              title={<h3 className="highlight__subtitle">Affordable Prices</h3>}
              desc={
                <p className="highlight__para">
                  Get it for a Good Price!
                </p>
              }></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
