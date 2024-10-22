import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlinePeople,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMasterDropdown = () => {
    setIsMasterOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="Logo" />
          <span className="sidebar-brand-text">Dashboard</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close sidebar">
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <MdOutlineGridView size={18} />
                Dashboard
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/area-table" className="menu-link" >
              <button   onClick={toggleMasterDropdown} style={{display:"flex", gap:"10px", alignItems:"center",}} className="lnk">
                <MdOutlinePeople size={20} />
               <p style={{fontSize:"15px"}}>Masters</p>
              </button>
              </Link>
              {isMasterOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><Link to="/industry" className="menu-link">Industry</Link></li>
                  <li className="dropdown-item"><Link to="/client" className="menu-link">Client</Link></li>
                  <li className="dropdown-item"><Link to="/notice" className="menu-link">Notice</Link></li>
                  <li className="dropdown-item"><Link to="/reason" className="menu-link">Reason</Link></li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <MdOutlineBarChart size={20} />
                Mapping
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <MdOutlineAttachMoney size={20} />
                Reports
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <MdOutlineCurrencyExchange size={18} />
                Operations
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <MdOutlineSettings size={20} />
                Settings
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <MdOutlineLogout size={20} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
