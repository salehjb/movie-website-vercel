import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// Styles
import "./Header.scss";
// Icon
import Logo from "../../assets/tmovie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header-wrap container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <Link to="/">tMovies</Link>
        </div>
        <div className="header-nav">
          {headerNav.map((element, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={element.path}>{element.display}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
