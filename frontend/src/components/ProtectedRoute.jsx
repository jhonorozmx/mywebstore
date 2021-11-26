import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/authentication/authSelectors";

export const ProtectedRoute = ({ children }) => {
  const authorized = useSelector(selectIsAuthenticated);
  const location = useLocation();
  const previousPath = location.pathname;

  return !authorized ? (
    <Navigate to="/signin" state={{ from: previousPath }} />
  ) : (
    children
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
