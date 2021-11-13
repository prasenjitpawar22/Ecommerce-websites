import React, { useEffect, useState } from "react";

function Checkout(props) {
  const { cartItems, onAdd, onRemove } = props;

  const [login, setlogin] = useState(true);

  const [price, setprice] = useState(0);

  let p = cartItems.reduce((a, v) => (a = a + v.price * v.qty), 0);

  const placeOrder =
    cartItems.length > 0 ? (
      <div className="container mx-auto flex h-96 select-none">
        <div className="p-4 w-2/5 overflow-auto ">
          <ul className="">
            {cartItems.map((item) => (
              <div key={item.id} className=" ">
                <li className="flex flex-row divide-y ">
                  <div className="">
                    <img className="w-32" src={item.image} />
                  </div>

                  <div className="flex flex-grow p-3  justify-between">
                    <div className="flex flex-col">
                      <p> {item.name} </p>
                      <p> {item.price} </p>
                    </div>
                    <div className="flex">
                      <div
                        style={{ height: "max-content" }}
                        className="block w-max px-3 rounded-xl mx-auto containe h-max 
                          text-white bg-gray-700 hover:bg-white hover:text-black 
                          hover:border-gray-900 cursor-pointer border-2 select-none"
                        onClick={() => onAdd(item)}
                      >
                        +
                      </div>
                      <div
                        style={{ height: "max-content" }}
                        className="w-6 text-center ml-2 mr-2 bg-gray-100 select-none"
                      >
                        {item.qty}
                      </div>
                      <div
                        style={{ height: "max-content" }}
                        className="block w-max px-3 rounded-xl mx-auto containe h-max 
                        text-white bg-gray-700 hover:bg-white hover:text-black 
                        hover:border-gray-900 cursor-pointer border-2 select-none"
                        onClick={() => onRemove(item)}
                      >
                        -
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="p-4 w-1/2">
          <h1>Total Amount: ${p} </h1>
          <h1>Total Items: {cartItems.length} </h1>
          <p className="text-green-700 font-bold ">Delevery Free</p>

          <div className=" items-center py-1 flex ">
            <input
              type="radio"
              id=" "
              name="paymentMethodChoice"
              value=" "
              className="mr-2"
            />
            <label className="mr-2">Cash on Delevery</label>
            <input
              type="radio"
              id=" "
              name="paymentMethodChoice"
              value=" "
              className="mr-2"
            />
            <label>Card </label>
          </div>
        </div>
      </div>
    ) : (
      <div className="container mx-auto ">cart is empty</div>
    );
  useEffect(() => {
    {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return <>{placeOrder}</>;
}

export default Checkout;
