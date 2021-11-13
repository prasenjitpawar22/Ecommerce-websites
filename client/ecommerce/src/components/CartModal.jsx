import { Link } from "react-router-dom";

function CartModal(props) {
  const { cartModal, setcartModal, onAdd, onRemove, cartItems } = props;

  return cartModal ? (
    <>
      <div
        className="flex top-0 bottom-0 right-0 xl:w-2/6 md:w-2/6 sm:w-full h-screen 
          absolute z-50 outline-nonefocus:outline-none bg-white select-none"
      >
        {/* <div className="relative w-auto mx-auto max-w-3xl"> */}
        <div className="border-0 rounded-lg shadow-lg relative flex justify-between  flex-col w-full  outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Cart Items</h3>
            <button
              className="p-1 ml-auto bg-red-400 border-0 text-black float-right   leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setcartModal(false)}
            >
              <span className="bg-red-400 text-black    outline-none focus:outline-none">
                Clear Cart
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="overflow-y-scroll select-none">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="flex flex-row p-2 divide-y  ">
                  <div className="flex flex-col p-2">
                    <img className="w-16" src={item.image} />
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="items-center justify-center ">
                      {" "}
                      {item.name}{" "}
                    </p>
                    <p>${item.price} </p>
                    <div className="flex justify-between">
                      <p>1kg</p>
                      <div className="add flex">
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
                  </div>
                </div>
              ))
            ) : (
              <div className="m">your cart is empty</div>
            )}
            {/* add offers and marketing */}
          </div>
          {/*footer*/}
          <div className=" bottom-0 items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setcartModal(false)}
            >
              Close
            </button>
            {cartItems.length > 0 ? (
              <Link
                className="bg-emerald-500 active:bg-emerald-600 font-bold 
                uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                to="check-out"
                onClick={() => setcartModal(false)}
              >
                Check out
              </Link>
            ) : null}
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
}

export default CartModal;
