import { useState } from "react";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "", role: "" }; // Assuming a logged-in user for demonstration

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize as 'false' to close modal by default

  const logOutHandler = () => {
    setIsOpen(false);
    // Add actual log out logic here
  };

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        Home
      </Link>
      {/* <Link onClick={()=>setIsOpen(false)} to={"/search"}><FaSearch /></Link> */}
      {/* <Link onClick={()=>setIsOpen(false)} to={"/cart"}><FaShoppingBag /></Link> */}

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>

          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                {user.role === "admin" && (
                  <Link onClick={() => setIsOpen(false)} to={""}>
                   
                  </Link>
                )}
                {/* <Link onClick={() => setIsOpen(false)} to={"/order"}>Order</Link> */}
                <button onClick={logOutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
