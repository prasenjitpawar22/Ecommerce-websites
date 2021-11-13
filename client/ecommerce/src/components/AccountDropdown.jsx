import { Link } from "react-router-dom";

function AccountDropDown(props) {
  const { AccountDropdownToggle, stateOfAccount } = props;

  return (
    <>
      {AccountDropdownToggle ? (
        stateOfAccount ? (
          <div className=" relative">
            <div className=" absolute right-0 z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Account Setting
              </Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Account Setting
              </Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Account Setting
              </Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Account Setting
              </Link>
            </div>
          </div>
        ) : (
          <div className=" relative">
            <div className=" absolute right-0 z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Signup
              </Link>
            </div>
          </div>
        )
      ) : null}
    </>
  );
}

export default AccountDropDown;
