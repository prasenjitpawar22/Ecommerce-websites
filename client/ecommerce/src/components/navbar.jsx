import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountDropDown from "./AccountDropdown";
import CartModal from "./CartModal";
import PincodeModalForm from "./PincodeModalForm";

function NavBar(props) {
  const { toggle, getPinCode, cartItems, onAdd, onRemove, stateOfAccount } =
    props;

  // pin modal
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinModalMessage, setpinModalMessage] = useState(null);

  const [pinCode, setpinCode] = useState("Change Location");
  const [inputPinCode, setinputPinCode] = useState("");

  const [cancelBtn, setcancelBtn] = useState(false);
  const [btnClick, setbtnClick] = useState("");

  //modal for cart
  const [cartModal, setcartModal] = useState(false);
  // Account Drop Down
  const [showAccountDropdown, setshowAccountDropdown] = useState(false);

  if (cartModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const vaidatepincode = (event) => {
    event.preventDefault();
    const va = verifyPincode(event.target[0].value).then((value) =>
      console.log(value)
    );
  };

  async function verifyPincode(pincode) {
    const response = await fetch("http://localhost:4000/api/get-pin-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pincode,
      }),
    });

    const data = await response.json();

    if (data.status === "available") {
      localStorage.setItem("pincode", pincode);

      setpinCode(data.districtName + " " + pincode);
      setShowPinModal(false);
      setpinModalMessage(null);
      return "success";
    } else {
      setpinModalMessage("Delevery Not avalible at your location");
      return "error";
    }
  }

  useEffect(() => {
    console.log(cartItems);
    const pincode = localStorage.getItem("pincode");
    console.log("got pinoced", pincode);

    pincode ? verifyPincode(pincode) : setShowPinModal(true);
  }, []);

  return (
    <>
      <nav
        className="flex container justify-between items-center h-16 mx-auto bg-white text-black relative shadow-md font-mono"
        rol="navigation"
      >
        <Link to="/" className="pl-8 lg:text-2xl">
          Green Store
        </Link>

        <div className="flex items-center">
          <span
            className="p-4 cursor-pointer"
            onClick={() => setShowPinModal(true)}
          >
            {pinCode}
          </span>
          <div className=" md:block hidden">
            <div className="flex">
              <Link className="p-4" to="/">
                Menu
              </Link>
              <Link className="p-4" to="/">
                Contact
              </Link>
            </div>
          </div>
          <div
            className="p-4 cursor-pointer"
            to="/"
            onClick={() => (setcartModal(!cartModal), console.log(cartItems))}
          >
            <span
              className="absolute transform -translate-y-2 translate-x-4 text-xs
             bg-green-200 rounded-full px-1 "
            >
              {cartItems.length}
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          {/* account div */}
          <div
            className="p-4 cursor-pointer"
            onClick={() => setshowAccountDropdown(!showAccountDropdown)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <AccountDropDown
              stateOfAccount={stateOfAccount}
              AccountDropdownToggle={showAccountDropdown}
            />
          </div>

          <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <PincodeModalForm
        showPinModal={showPinModal}
        setShowPinModal={setShowPinModal}
        vaidatepincode={vaidatepincode}
        setinputPinCode={setinputPinCode}
        pinModalMessage={pinModalMessage}
      />
      <CartModal
        cartModal={cartModal}
        setcartModal={setcartModal}
        cartItems={cartItems}
        onRemove={onRemove}
        onAdd={onAdd}
      />
    </>
  );
}
export default NavBar;
