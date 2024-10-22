import React, { useState, useEffect } from "react";
import "./CreateIndustryModal.scss";

const CreateIndustryModal = ({ isOpen, onClose, onSave }) => {
  const [industryId, setIndustryId] = useState("");
  const [industryName, setIndustryName] = useState("");
  const [status, setStatus] = useState("pending");
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [showIdError, setShowIdError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);

  useEffect(() => {
    setIsSaveEnabled(industryId && industryName); // Enable save button if all fields are filled
  }, [industryId, industryName]);

  const handleSave = () => {
    if (!industryId) setShowIdError(true);
    if (!industryName) setShowNameError(true);
    if (!industryId || !industryName) return;

    const newIndustry = { id: industryId, name: industryName, status };
    onSave(newIndustry);
    resetForm();
  };

  const resetForm = () => {
    setIndustryId("");
    setIndustryName("");
    setStatus("pending");
    setShowIdError(false);
    setShowNameError(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Create New Industry</h4>
        <label>
          Industry ID:
          <input
            type="text"
            value={industryId}
            onChange={(e) => {
              setIndustryId(e.target.value);
              setShowIdError(false);
            }}
            placeholder="Enter Industry ID"
            required
          />
          {showIdError && <p className="error-text">Please fill in Industry ID</p>}
        </label>
        <label>
          Industry Name:
          <input
            type="text"
            value={industryName}
            onChange={(e) => {
              setIndustryName(e.target.value);
              setShowNameError(false);
            }}
            placeholder="Enter Industry Name"
            required
          />
          {showNameError && <p className="error-text">Please fill in Industry Name</p>}
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </label>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="save-button" onClick={handleSave} disabled={!isSaveEnabled}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateIndustryModal;
