import React, { useState } from "react";

function PincodeModalForm(props) {
  const {
    showPinModal,
    vaidatepincode,
    inputPinCode,
    cancelBtn,
    btnClick,
    setShowPinModal,
    pinCode,
    setcancelBtn,
    setinputPinCode,
    setbtnClick,
    pinModalMessage,
    setPin,
  } = props;

  const [displayPinModalMessage, setdisplayPinModalMessage] = useState();

  return showPinModal ? (
    <>
      <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <form className="w-full max-w-sm" onSubmit={vaidatepincode}>
                  <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="number"
                      placeholder="Pin Code"
                      aria-label="Full name"
                      value={inputPinCode}
                      autoComplete="off"
                      onChange={(e) => setinputPinCode(e.target.value)}
                      name="pincode"
                      required
                    />
                    <button
                      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
                      type="submit"
                      // onClick={() => (getPinCode(pinCode), setShowPinModal(false))}
                    >
                      Enter
                    </button>
                    <button
                      className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                      type="button"
                      onClick={() =>
                        pinCode === "Change Location"
                          ? null
                          : setShowPinModal(!showPinModal)
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                <span className="inline-block m-2 px-2  bg-red-400 rounded-full ">
                  {displayPinModalMessage}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  ) : null;
}

export default PincodeModalForm;
