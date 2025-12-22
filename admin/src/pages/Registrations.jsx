  import React, { useState, useEffect } from "react";
  import { Edit2, Trash2, Eye } from "lucide-react";
  import { Helmet } from "react-helmet-async";
  import ConfirmDialog from "../components/DeleteConfirmDialog";
  import toast from "react-hot-toast";
  import api from "../api/axios";

  export default function Registrations() {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

   const [registrations, setRegistrations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMembership, setSelectedMembership] = useState(null); 
    const itemsPerPage = 5;

    // Fetch memberships
   useEffect(() => {
  const fetchMemberships = async () => {
    try {
      const response = await api.get("/membership");
      console.log("Memberships fetched:", response.data);

      if (response.data.success) {
        setRegistrations(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch memberships:", error);
    }
  };

  fetchMemberships();
}, []);


     const totalPages = Math.ceil((registrations?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = Array.isArray(registrations)
    ? registrations.slice(startIndex, startIndex + itemsPerPage)
    : [];


      // Confirmation before delete
const handleDeleteClick = (id) => {
  setDeleteId(id);
  setConfirmOpen(true);
};


// Delete membership
const confirmDelete = async () => {
  if (!deleteId) return;

  try {
    await api.delete(`/membership/${deleteId}`);

    setRegistrations((prev) =>
      prev.filter((reg) => reg._id !== deleteId)
    );

    toast.success("Membership deleted successfully!");

    setConfirmOpen(false);
    setDeleteId(null);
  } catch (error) {
    console.error("Failed to delete membership:", error);
    toast.error("Failed to delete membership");
  }
};


    return (
      <div className="p-6">
        <Helmet>
          <title>Memberships | Dashboard</title>
        </Helmet>

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Memberships</h1>

        {/* Table */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-700">All Memberships</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                  <th className="px-4 py-3 rounded-tl-lg font-medium">S.No</th>
                  <th className="px-4 py-3 font-medium">Company Name</th>
                  <th className="px-4 py-3 font-medium">City</th>
                  <th className="px-4 py-3 font-medium">Mobile</th>
                  <th className="px-4 py-3 rounded-tr-lg font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((reg, index) => (
                  <tr
                    key={reg._id}
                    className={`text-gray-700 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="px-4 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-4 py-3">{reg.companyName}</td>
                    <td className="px-4 py-3">{reg.factoryCity}</td> 
                    <td className="px-4 py-3">{reg.factoryMobile}</td> 
                    {/* <td className="px-4 py-3">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={reg.status ?? true}
                          onChange={() => toggleStatus(reg._id)}
                          className="sr-only peer"
                        />
                        <div className="relative w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition">
                          <span className="absolute left-0.5 top-0.5 h-4 w-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
                        </div>
                      </label>
                    </td> */}
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => setSelectedMembership(reg)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mr-2"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(reg._id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end mt-4 gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${currentPage === index + 1
                  ? "bg-[#AD0000] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>


        {/* Modal */}
        {selectedMembership && (

          <div className="fixed inset-0 flex items-start justify-center z-50 pt-10 overflow-y-auto">
            <div className="aiifa-form-container relative w-11/12 max-w-5xl rounded-lg">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMembership(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black font-bold text-lg"
              >
                ✖
              </button>

              {/* Header */}
              <div className="aiifa-header">
                <div className="association-name">AIIFA Sustainable Steel Manufacturers Association</div>
                <div className="former-name">(Formerly known as All India Induction Furnaces Association)</div>
                <div className="tagline">(Voice of Indian Sustainable Steel Manufacturing Sector)</div>
                <div className="form-title">AIIFA MEMBERSHIP FORM</div>
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                504, Tower 1, Pearls Omaxe, Netaji Subhash Place, Pitampura, Delhi - 110034
                <br />
                Mob: 9810410186 | Tel: 011-27351345/47/42725051 | E-Mail: aiifa8@gmail.com
              </div>

              <form className="space-y-6 text-sm">
                {/* 1. Company Name */}
                <div className="form-section">
                  <div className="section-number">1.</div>
                  <div className="section-content">
                    <label className="section-label">NAME OF THE COMPANY (IN BLOCK LETTERS)</label>
                    <input
                      type="text"
                      value={selectedMembership.companyName || "-"}
                      readOnly
                      className="company-input"
                    />
                  </div>
                </div>

                {/* 2. Factory Address */}
                <div className="form-section">
                  <div className="section-number">2.</div>
                  <div className="section-content">
                    <label className="section-label">FACTORY ADDRESS</label>
                    <div className="address-grid">
                      {[
                        { label: "DISTT", value: selectedMembership.factoryDistrict },
                        { label: "CITY", value: selectedMembership.factoryCity },
                        { label: "PHONE", value: selectedMembership.factoryPhone },
                        { label: "PIN CODE", value: selectedMembership.factoryPinCode },
                        { label: "MOBILE", value: selectedMembership.factoryMobile },
                        { label: "E-MAIL 1", value: selectedMembership.factoryEmail1 },
                        { label: "E-MAIL 2", value: selectedMembership.factoryEmail2 },
                      ].map((item, idx) => (
                        <div key={idx} className="input-group">
                          <span className="input-label">{item.label}:</span>
                          <input type="text" value={item.value || "-"} readOnly />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Correspondence Address */}
                <div className="form-section">
                  <div className="section-number">3.</div>
                  <div className="section-content">
                    <label className="section-label">ADDRESS FOR CORRESPONDENCE</label>
                    <div className="address-grid">
                      {[
                        { label: "DISTT", value: selectedMembership.correspondenceDistrict },
                        { label: "CITY", value: selectedMembership.correspondenceCity },
                        { label: "PIN CODE", value: selectedMembership.correspondencePinCode },
                        { label: "MOBILE", value: selectedMembership.correspondenceMobile },
                        { label: "PHONE", value: selectedMembership.correspondencePhone },
                        { label: "E-MAIL 1", value: selectedMembership.correspondenceEmail1 },
                        { label: "E-MAIL 2", value: selectedMembership.correspondenceEmail2 },
                      ].map((item, idx) => (
                        <div key={idx} className="input-group">
                          <span className="input-label">{item.label}:</span>
                          <input type="text" value={item.value || "-"} readOnly />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Representative Details */}
                <div className="form-section">
                  <div className="section-number">4.</div>
                  <div className="section-content">
                    <label className="section-label">REPRESENTATIVE DETAILS</label>

                    <div className="address-grid">
                      {[
                        { label: "NAME", value: selectedMembership.representativeName },
                        { label: "DESIGNATION", value: selectedMembership.designation },
                        { label: "MOBILE", value: selectedMembership.representativeMobile },
                        { label: "PHONE", value: selectedMembership.representativePhone },
                        { label: "E-MAIL", value: selectedMembership.representativeEmail },
                      ].map((item, idx) => (
                        <div key={idx} className="input-group">
                          <span className="input-label">{item.label}:</span>
                          <input type="text" value={item.value || "-"} readOnly />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


                {/* 5. GST & Furnace */}
                <div className="form-section">
                  <div className="section-number">5.</div>
                  <div className="section-content">
                    <label className="section-label">GST & FURNACE DETAILS</label>
                    <div className="furnace-details-grid">
                      <div className="input-group">
                        <span className="input-label">GST No.:</span>
                        <input type="text" value={selectedMembership.gstNumber || "-"} readOnly />
                      </div>
                      <div className="input-group">
                        <span className="input-label">CAPACITY:</span>
                        <input type="text" value={selectedMembership.furnaceCapacity || "-"} readOnly />
                      </div>
                      <div className="input-group">
                        <span className="input-label">MAKE:</span>
                        <input type="text" value={selectedMembership.furnaceMake || "-"} readOnly />
                      </div>
                      <div className="input-group">
                        <span className="input-label">NO. OF CRUCIBLE:</span>
                        <input type="text" value={selectedMembership.numberOfCrucible || "-"} readOnly />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Raw Material Used */}
                <div className="form-section">
                  <div className="section-number">6.</div>
                  <div className="section-content">
                    <label className="section-label">RAW MATERIAL USED</label>

                    <div className="address-grid">
                      {[
                        { label: "DRI", value: selectedMembership.dri },
                        { label: "PELLET", value: selectedMembership.pellet },
                        { label: "IMPORTED SCRAP", value: selectedMembership.importedScrap },
                        { label: "INDIGENOUS SCRAP", value: selectedMembership.indigenousScrap },
                      ].map((item, idx) => (
                        <div key={idx} className="input-group">
                          <span className="input-label">{item.label}:</span>
                          <input type="text" value={item.value || "-"} readOnly />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 7. DRI / Pellet Manufacturer */}
                  <div className="form-section">
                    <div className="section-number">7.</div>
                    <div className="section-content">
                      <label className="section-label">DRI / PELLET MANUFACTURER</label>

                      <div className="address-grid">
                        {[
                          { label: "DRI MANUFACTURER", value: selectedMembership.driManufacturer },
                          { label: "GAS BASED", value: selectedMembership.processRouteGasBased ? "YES" : "NO" },
                          { label: "COAL BASED", value: selectedMembership.processRouteCoalBased ? "YES" : "NO" },
                          { label: "TECHNOLOGY", value: selectedMembership.technology },
                          { label: "ANNUAL CAPACITY", value: selectedMembership.annualCapacity },
                          { label: "PELLET PROCESS", value: selectedMembership.pelletProcess },
                          { label: "PELLET CAPACITY", value: selectedMembership.pelletAnnualCapacity },
                        ].map((item, idx) => (
                          <div key={idx} className="input-group">
                            <span className="input-label">{item.label}:</span>
                            <input type="text" value={item.value || "-"} readOnly />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                        {/* 8. Rolling Mill Details */}
                    <div className="form-section">
                      <div className="section-number">8.</div>
                      <div className="section-content">
                        <label className="section-label">ROLLING MILL DETAILS</label>

                        <div className="checkbox-group">
                          <div className="checkbox-item">
                            <input type="checkbox" checked={selectedMembership.rollingMillIntegrated || false} readOnly />
                            <label>INTEGRATED</label>
                          </div>

                          <div className="checkbox-item">
                            <input type="checkbox" checked={selectedMembership.rollingMillSisterConcern || false} readOnly />
                            <label>SISTER CONCERN</label>
                          </div>
                        </div>
                      </div>
                  </div>

                        {/* 9. Mill Capacity */}
                    <div className="form-section">
                      <div className="section-number">9.</div>
                      <div className="section-content">
                        <label className="section-label">MILL CAPACITY</label>

                        <div className="address-grid">
                          {[
                            { label: "ROUGHING", value: selectedMembership.millCapacityRoughing },
                            { label: "INTERMEDIATE", value: selectedMembership.millCapacityIntermediate },
                            { label: "FINISHING", value: selectedMembership.millCapacityFinishing },
                          ].map((item, idx) => (
                            <div key={idx} className="input-group">
                              <span className="input-label">{item.label}:</span>
                              <input type="text" value={item.value || "-"} readOnly />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>


                {/* 10. Product Name */}
                <div className="form-section">
                  <div className="section-number">10.</div>
                  <div className="section-content">
                    <label className="section-label">NAME OF THE PRODUCT</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input type="checkbox" checked={selectedMembership.productTMT || false} readOnly />
                        <label>TMT</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={selectedMembership.productStructure || false}
                          readOnly
                        />
                        <label>STRUCTURE</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={selectedMembership.productOther || false}
                          readOnly
                        />
                        <label>OTHER</label>
                        {selectedMembership.productOther && (
                          <input
                            type="text"
                            value={selectedMembership.otherProductName || ""}
                            readOnly
                            className="ml-2 border rounded-md px-2 py-1 text-sm"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11. Brand Name & Power */}
                <div className="form-section">
                  <div className="section-number">11.</div>
                  <div className="section-content">
                    <div className="address-grid">
                      <div className="input-group">
                        <span className="input-label">BRAND NAME:</span>
                        <input
                          type="text"
                          value={selectedMembership.brandName || "-"}
                          readOnly
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-label">POWER (KVA):</span>
                        <input
                          type="text"
                          value={selectedMembership.powerConnectingLoad || "-"}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Procurement Source */}
                <div className="form-section">
                  <div className="section-number">12.</div>
                  <div className="section-content">
                    <label className="section-label">PROCUREMENT SOURCE</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={selectedMembership.procurementSelfGenerating || false}
                          readOnly
                        />
                        <label>SELF GENERATING</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={selectedMembership.procurementState || false}
                          readOnly
                        />
                        <label>STATE</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={selectedMembership.procurementOpenAccess || false}
                          readOnly
                        />
                        <label>OPEN ACCESS</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 14. BIS Certification */}
                <div className="form-section">
                  <div className="section-number">14.</div>
                  <div className="section-content">
                    <label className="section-label">
                      PLEASE GIVE BIS CERTIFICATION MARK IF TAKEN BY YOU
                    </label>
                    <input
                      type="text"
                      value={selectedMembership.bisCertificationMark || "-"}
                      readOnly
                      className="company-input"
                    />
                  </div>
                </div>

                {/* Signature */}
                <div className="form-actions">
                  <h3 className="text-sm font-semibold mb-2">COMPANY SEAL & SIGNATURE</h3>
                  <div className="w-full h-24 border border-gray-300 bg-gray-100 rounded-md"></div>
                </div>
              </form>
            </div>
          </div>
        )}


<ConfirmDialog
  isOpen={confirmOpen}
  title="Delete Membership"
  message="Are you sure you want to delete this membership? This action cannot be undone."
  onConfirm={confirmDelete}
  onCancel={() => {
    setConfirmOpen(false);
    setDeleteId(null);
  }}
/>

      </div>
    );
  }
