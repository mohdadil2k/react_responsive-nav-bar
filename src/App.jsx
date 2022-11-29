import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import "./index.css";

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const navigationLinksRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const ulLinksHeight = navLinksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      navigationLinksRef.current.style.height = `${ulLinksHeight}px`;
    } else {
      navigationLinksRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav className="nav-main">
        <div className="nav">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <button
              className="toggle-btn"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="navigation-links" ref={navigationLinksRef}>
            <ul className="nav-links" ref={navLinksRef}>
              {links.map((currNav) => {
                const { id, text, url } = currNav;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="icons">
            {social.map((currIcon) => {
              const { id, url, icon } = currIcon;
              return (
                <li key={id}>
                  {" "}
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
