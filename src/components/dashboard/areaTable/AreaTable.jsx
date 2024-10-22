import React, { useState } from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import CreateIndustryModal from './CreateIndustryModal';

const TABLE_HEADS = ["Industry ID", "Industry name", "Status", "Action"];

const INITIAL_TABLE_DATA = [
  { id: 100, name: "Bank", status: "delivered" },
  { id: 101, name: "Bank2", status: "pending" },
  { id: 102, name: "Bank3", status: "canceled" },
  { id: 103, name: "Bank4", status: "delivered" },
  { id: 104, name: "Bank5", status: "delivered" },
  { id: 105, name: "Bank6", status: "delivered" },
];

const AreaTable = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState(INITIAL_TABLE_DATA);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Function to handle adding new industry data to the table
  const handleAddIndustry = (newIndustry) => {
    setTableData([...tableData, newIndustry]);
    closeModal();
  };

  // Function to handle deleting an industry
  const handleDelete = (id) => {
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Industry Orders</h4>
        <button className="btn" onClick={openModal}>
          Create
        </button>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.id}</td>
                <td>{dataItem.name}</td>
                <td>
                  <div className="dt-status">
                    <span className={`dt-status-dot dot-${dataItem.status}`}></span>
                    <span className="dt-status-text">{dataItem.status}</span>
                  </div>
                </td>
                <td className="dt-cell-action">
                  <AreaTableAction onDelete={handleDelete} id={dataItem.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal Component */}
      <CreateIndustryModal isOpen={isModalOpen} onClose={closeModal} onSave={handleAddIndustry} />
    </section>
  );
};

export default AreaTable;
