import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../../features/users/usersSelector";
import { signOut } from "../../features/users/usersThunk";
import { clearProductList } from "../../features/products/productsSlice";
import { siteLogo } from "../../assets";
import MenuItem from "./MenuItem";

const NavBar = () => {
  // Routing
  const navigate = useNavigate();
  const location = useLocation();

  // Redux State
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(clearProductList());
    dispatch(signOut());
    navigate("/");
  };

  return (
    <div className="top-row">
      <div className="logo">
        <img
          src={siteLogo}
          alt="logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        />
      </div>

      <div className="menu">
        {!userInfo ? (
          <>
            <MenuItem
              name="Register"
              location={location.pathname}
              route="/register"
              children={<i className="fas fa-user-edit"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            />
            <MenuItem
              name="Sign In"
              location={location.pathname}
              route="/signin"
              children={<i className="fas fa-sign-in-alt"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/signin");
              }}
            />
          </>
        ) : (
          <>
            <MenuItem
              name="Dashboard"
              location={location.pathname}
              route="/dashboard"
              children={<i className="fas fa-tachometer-alt"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            />

            <MenuItem
              name="Store"
              location={location.pathname}
              route="/store"
              children={<i className="fas fa-store-alt"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/store");
              }}
            />

            <MenuItem
              name="Inventory"
              location={location.pathname}
              route="/inventory"
              children={<i className="fas fa-dolly-flatbed"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/inventory");
              }}
            />

            <MenuItem
              name="Sales"
              location={location.pathname}
              route="/sales"
              children={<i className="fas fa-clipboard-list"></i>}
              handler={(e) => {
                e.preventDefault();
                navigate("/sales");
              }}
            />

            <MenuItem
              name="Sign out"
              children={<i className="fas fa-sign-out-alt"></i>}
              handler={handleLogout}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
