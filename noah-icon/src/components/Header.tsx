import { Link, useLocation } from "react-router-dom";
import { routeObjects } from "../main";

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="flex items-start space-x-6 underline text-link flex-wrap p-3">
      {Object.keys(routeObjects).map((name) => {
        const route = routeObjects[name];
        const path = route.path || "/";
        return (
          <Link
            to={path}
            className={
              location.pathname == path ? "text-link" : "text-link-thin"
            }
          >
            {name}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
