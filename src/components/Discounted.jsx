import React from "react";
import Book from "./ui/Book";
import {books} from "../data";

const Discounted = () => {
  return (
    <section className="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="brown">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <Book book={book} key={book.id}></Book>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
