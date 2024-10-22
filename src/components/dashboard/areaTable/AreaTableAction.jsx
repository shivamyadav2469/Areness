import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const AreaTableAction = ({ onDelete, id }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handler for the delete action
  const handleDelete = () => {
    // Trigger the onDelete callback passed from the parent component
    if (onDelete) {
      onDelete(id);
    }
    setShowDropdown(false);
  };

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">View</li>
              <li className="dropdown-menu-item">Edit</li>
              <li className="dropdown-menu-item" onClick={handleDelete}>
                Delete
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default AreaTableAction;
