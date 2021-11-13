import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import NavBar from "./components/navbar";
import data from "./data";
import DropdownNav from "./components/dropdownNav";
import Checkout from "./pages/cart-checkout";
import Footer from "./components/footer";
import LoginPage from "./pages/login";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const [isOpen, setisOpen] = useState(false);

  // login or not
  const [stateOfAccount, setstateOfAccount] = useState(false);

  const toggle = () => {
    console.log("toggled");
    setisOpen(!isOpen);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log("the product", product);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Router>
        <NavBar
          stateOfAccount={stateOfAccount}
          cartItems={cartItems}
          toggle={toggle}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <DropdownNav toggle={toggle} isOpen={isOpen} />
        <Switch>
          <Route path="/" exact>
            <HomePage
              onAdd={onAdd}
              cartItems={cartItems}
              products={products}
              component={HomePage}
            />
          </Route>
          <Route path="/check-out" exact>
            <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
