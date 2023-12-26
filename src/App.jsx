import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Book from "./pages/Books";
import Footer from "./components/Footer";
import {books} from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let count = 0
    cart.forEach(item=> {
      count += item.quantity
    })
    return count
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  console.log(books);

  return (
    <Router>
      <div className="App">
        <Nav  numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Book books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} cart={cart} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// function addToCart(book){
//   const dupeItem = cart.find(item=> +item.id === +book.id)
//   if (dupeItem ){
//     setCart(cart.map(item=> {
//       if(item.id === dupeItem.id){
//         return{
//           ...item,
//           quantity: item.quantity + 1,
//         }
//       }
//       else{
//         return item
//       }
//     }))
//   }
//   else{
//     setCart([...cart, {...book, quantity:1}]);
//   }
// }
