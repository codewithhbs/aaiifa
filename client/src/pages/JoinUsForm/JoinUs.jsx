import React, { useState } from "react";
import "./AIIFAMembershipForm.css";

const defaultFormState = {
  companyName: "",

  factoryDistrict: "",
  factoryCity: "",
  factoryPinCode: "",
  factoryMobile: "",
  factoryPhone: "",
  factoryEmail1: "",
  factoryEmail2: "",

  correspondenceDistrict: "",
  correspondenceCity: "",
  correspondencePinCode: "",
  correspondenceMobile: "",
  correspondencePhone: "",
  correspondenceEmail1: "",
  correspondenceEmail2: "",

  representativeName: "",
  designation: "",
  representativeMobile: "",
  representativePhone: "",
  representativeEmail: "",
  gstNumber: "",

  furnaceCapacity: "",
  furnaceMake: "",
  numberOfCrucible: "",

  productIngot: false,
  productBillet: false,

  dri: "",
  pellet: "",
  importedScrap: "",
  indigenousScrap: "",

  driManufacturer: "",
  processRouteGasBased: false,
  processRouteCoalBased: false,
  technology: "",
  annualCapacity: "",

  pelletProcess: "",
  pelletAnnualCapacity: "",

  rollingMillIntegrated: false,
  rollingMillSisterConcern: false,

  millCapacityRoughing: "",
  millCapacityIntermediate: "",
  millCapacityFinishing: "",

  productTMT: false,
  productStructure: false,
  productOther: false,
  otherProductName: "",

  brandName: "",
  powerConnectingLoad: "",

  procurementSelfGenerating: false,
  procurementState: false,
  procurementOpenAccess: false,

  bisCertificationMark: "",
  greenSteelCertificate: "",

  membershipno: "",
  dateOfEnrollment: ""
};

const AIIFAMembershipForm = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.aaiifa.org/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Membership submitted successfully!");

        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);

        setFormData(defaultFormState);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Failed to submit form.");
    }
  };
  return (
    <div className="aiifa-form-container my-4">

      {/* HEADER */}
      <div className="aiifa-header">
        <div className="association-name">
          AIIFA SUSTAINABLE STEEL MANUFACTURERS ASSOCIATION
        </div>
        <div className="former-name">
          (Formerly known as All India Induction Furnaces Association)
        </div>
        <div className="tagline">
          (Promoting Sustainability in Steel for Greener Future)
        </div>
        <div className="form-title">AIIFA MEMBERSHIP FORM</div>
      </div>

      <div className="contact-info">
        504, Tower 1, Pearls Omaxe, Netaji Subhash Place, Pitampura, Delhi - 110034<br />
        Mob: 9810410186 Tel: 011-27351345/47/42725051 E-Mail: aaiifa6@gmail.com
      </div>

      <form onSubmit={handleSubmit} className="membership-form">

        {/* 1 */}
        <div className="form-section">
          <div className="section-number">1.</div>
          <div className="section-content">
            <label className="section-label">NAME OF THE COMPANY (IN BLOCK LETTERS)</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="company-input" required />
          </div>
        </div>

        {/* 2 */}
        <div className="form-section">
          <div className="section-number">2.</div>
          <div className="section-content">
            <label className="section-label">FACTORY ADDRESS</label>

            <div className="address-grid">
              <input placeholder="DISTT" name="factoryDistrict" value={formData.factoryDistrict} onChange={handleInputChange} />
              <input placeholder="CITY" name="factoryCity" value={formData.factoryCity} onChange={handleInputChange} />
              <input placeholder="PIN CODE" name="factoryPinCode" value={formData.factoryPinCode} onChange={handleInputChange} />
              <input placeholder="MOBILE NO." name="factoryMobile" value={formData.factoryMobile} onChange={handleInputChange} required />
              <input placeholder="PHONE NO." name="factoryPhone" value={formData.factoryPhone} onChange={handleInputChange} required />
            </div>

            <input placeholder="E-MAIL ID 1" name="factoryEmail1" value={formData.factoryEmail1} onChange={handleInputChange} />
            <input placeholder="E-MAIL ID 2" name="factoryEmail2" value={formData.factoryEmail2} onChange={handleInputChange} />
          </div>
        </div>

        {/* 3 */}
        <div className="form-section">
          <div className="section-number">3.</div>
          <div className="section-content">
            <label className="section-label">ADDRESS FOR CORRESPONDENCE</label>

            <div className="address-grid">
              <input placeholder="DISTT" name="correspondenceDistrict" value={formData.correspondenceDistrict} onChange={handleInputChange} />
              <input placeholder="CITY" name="correspondenceCity" value={formData.correspondenceCity} onChange={handleInputChange} />
              <input placeholder="PIN CODE" name="correspondencePinCode" value={formData.correspondencePinCode} onChange={handleInputChange} />
              <input placeholder="MOBILE NO." name="correspondenceMobile" value={formData.correspondenceMobile} onChange={handleInputChange} />
              <input placeholder="PHONE NO." name="correspondencePhone" value={formData.correspondencePhone} onChange={handleInputChange} />
            </div>

            <input placeholder="E-MAIL ID 1" name="correspondenceEmail1" value={formData.correspondenceEmail1} onChange={handleInputChange} />
            <input placeholder="E-MAIL ID 2" name="correspondenceEmail2" value={formData.correspondenceEmail2} onChange={handleInputChange} />
          </div>
        </div>

        {/* 4 */}
        <div className="form-section">
          <div className="section-number">4.</div>
          <div className="section-content">
            <input placeholder="NAME OF REPRESENTATIVE" name="representativeName" value={formData.representativeName} onChange={handleInputChange} />
            <input placeholder="DESIGNATION" name="designation" value={formData.designation} onChange={handleInputChange} />
            <input placeholder="MOBILE NO." name="representativeMobile" value={formData.representativeMobile} onChange={handleInputChange} />
            <input placeholder="PH. NO." name="representativePhone" value={formData.representativePhone} onChange={handleInputChange} />
            <input placeholder="E-MAIL ID 1" name="representativeEmail" value={formData.representativeEmail} onChange={handleInputChange} />
            <input placeholder="GST No." name="gstNumber" value={formData.gstNumber} onChange={handleInputChange} />
          </div>
        </div>

        {/* 5 */}
        <div className="form-section">
          <div className="section-number">5.</div>
                      <label className="section-label">FURNACE DETAIL: </label>
          <div className="section-content">
            <input placeholder="FURNACE CAPACITY" name="furnaceCapacity" value={formData.furnaceCapacity} onChange={handleInputChange} />
            <input placeholder="MAKE" name="furnaceMake" value={formData.furnaceMake} onChange={handleInputChange} />
            <input placeholder="NO. OF CRUCIBLE" name="numberOfCrucible" value={formData.numberOfCrucible} onChange={handleInputChange} />

            <label className="section-label">PRODUCT</label>
            <label><input type="checkbox" name="productIngot" checked={formData.productIngot} onChange={handleInputChange} /> INGOT</label>
            <label><input type="checkbox" name="productBillet" checked={formData.productBillet} onChange={handleInputChange} /> BILLET</label>
          </div>
        </div>

        {/* 6 */}
        <div className="form-section">
          <div className="section-number">6.</div>
           <label className="section-label">RAW METERAIL USED: </label>
          <div className="section-content">
            <input placeholder="DRI" name="dri" value={formData.dri} onChange={handleInputChange} />
            <input placeholder="PELLETS" name="pellet" value={formData.pellet} onChange={handleInputChange} />
            <input placeholder="IMPORTED SCRAP" name="importedScrap" value={formData.importedScrap} onChange={handleInputChange} />
            <input placeholder="INDIGENOUS SCRAP" name="indigenousScrap" value={formData.indigenousScrap} onChange={handleInputChange} />
          </div>
        </div>

        {/* 7 */}
        <div className="form-section">
  <div className="section-number">7.</div>

  <div className="section-content">

    {/* A) DRI MANUFACTURER */}
    <label className="section-label">
      ARE YOU: (A) DRI MANUFACTURER
    </label>

    <div className="radio-row">
      <label>
        <input
          type="radio"
          name="driManufacturer"
          value="YES"
          checked={formData.driManufacturer === "YES"}
          onChange={handleInputChange}
        />{" "}
        (Y)
      </label>

      <label>
        <input
          type="radio"
          name="driManufacturer"
          value="NO"
          checked={formData.driManufacturer === "NO"}
          onChange={handleInputChange}
        />{" "}
        (N)
      </label>
    </div>

    {/* PROCESS ROUTE */}
    <label className="section-label">PROCESS ROUTE:</label>

    <div className="checkbox-row">
      <label>
        <input
          type="checkbox"
          name="processRouteGasBased"
          checked={formData.processRouteGasBased}
          onChange={handleInputChange}
        />{" "}
        GAS BASED
      </label>

      <label>
        <input
          type="checkbox"
          name="processRouteCoalBased"
          checked={formData.processRouteCoalBased}
          onChange={handleInputChange}
        />{" "}
        COAL BASED
      </label>
    </div>

    {/* TECHNOLOGY + ANNUAL CAPACITY */}
    <div className="two-col-grid">
      <input
        type="text"
        placeholder="TECHNOLOGY"
        name="technology"
        value={formData.technology}
        onChange={handleInputChange}
      />

      <input
        type="text"
        placeholder="ANNUAL CAPACITY"
        name="annualCapacity"
        value={formData.annualCapacity}
        onChange={handleInputChange}
      />
    </div>

    {/* B) PELLET MANUFACTURER */}
    <label className="section-label" style={{ marginTop: "10px" }}>
      (B) PELLET MANUFACTURER
    </label>

    <div className="two-col-grid">
      <input
        type="text"
        placeholder="PROCESS"
        name="pelletProcess"
        value={formData.pelletProcess}
        onChange={handleInputChange}
      />

      <input
        type="text"
        placeholder="ANNUAL CAPACITY"
        name="pelletAnnualCapacity"
        value={formData.pelletAnnualCapacity}
        onChange={handleInputChange}
      />
    </div>

  </div>
</div>


        {/* 8 */}
        <div className="form-section">
          <div className="section-number">8.</div>
          <label className="section-label">ROLLING MILL DETAILS :-</label>
          <div className="section-content">
            <label><input type="checkbox" name="rollingMillIntegrated" onChange={handleInputChange} /> INTEGRATED</label>
            <label><input type="checkbox" name="rollingMillSisterConcern" onChange={handleInputChange} /> SISTER CONCERN</label>
          </div>
        </div>

        {/* 9 */}
        <div className="form-section">
          <div className="section-number">9.</div>
          <label className="section-label">MILL CAPACITY (tph):</label>
          <div className="section-content">
            <input placeholder="ROUGHING (IN INCH)" name="millCapacityRoughing" value={formData.millCapacityRoughing} onChange={handleInputChange} />
            <input placeholder="INTERMEDIATE (IN INCH)" name="millCapacityIntermediate" value={formData.millCapacityIntermediate} onChange={handleInputChange} />
            <input placeholder="FINISHING (IN INCH)" name="millCapacityFinishing" value={formData.millCapacityFinishing} onChange={handleInputChange} />
          </div>
        </div>

        {/* 10 */}
        <div className="form-section">
          <div className="section-number">10.</div>
          <label className="section-label">NAME OF THE PRODUCT:</label>
          <div className="section-content">
            <label><input type="checkbox" name="productTMT" onChange={handleInputChange} /> TMT</label>
            <label><input type="checkbox" name="productStructure" onChange={handleInputChange} /> STRUCTURE</label>
            <label><input type="checkbox" name="productOther" onChange={handleInputChange} /> OTHER</label>
            {formData.productOther && (
              <input name="otherProductName" value={formData.otherProductName} onChange={handleInputChange} placeholder="Specify Other" />
            )}
          </div>
        </div>

        {/* 11 */}
        <div className="form-section">
          <div className="section-number">11.</div>
          <label className="section-label"> BRAND NAME:</label>
          <div className="section-content">
            <input placeholder="BRAND NAME" name="brandName" value={formData.brandName} onChange={handleInputChange} />
          </div>
        </div>

        {/* 12 */}
        <div className="form-section">
          <div className="section-number">12.</div>
          <div className="section-content">
            <input placeholder="POWER CONNECTING LOAD (KVA)" name="powerConnectingLoad" value={formData.powerConnectingLoad} onChange={handleInputChange} />
          </div>
        </div>

        {/* 13 */}
        <div className="form-section">
          <div className="section-number">13.</div>
          <label className="section-label">PRECUREMENT SOURCE:</label>
          <div className="section-content">
            <label><input type="checkbox" name="procurementSelfGenerating" onChange={handleInputChange} /> SELF GENERATING</label>
            <label><input type="checkbox" name="procurementState" onChange={handleInputChange} /> STATE</label>
            <label><input type="checkbox" name="procurementOpenAccess" onChange={handleInputChange} /> OPEN ACCESS</label>
          </div>
        </div>

        {/* 14 */}
        <div className="form-section">
          <div className="section-number">14.</div>
          <label className="section-label">PLEASE GIVE BIS CERTIFICATION MARK IF TAKEN BY YOU:</label>
          <div className="section-content">
            <input placeholder="BIS CERTIFICATION MARK" name="bisCertificationMark" value={formData.bisCertificationMark} onChange={handleInputChange} />
          </div>
        </div>

        {/* 15 */}
        <div className="form-section">
          <div className="section-number">15.</div>
          <label className="section-label">PLEASE GIVE GREEN STEEL CERTIFICATE MARK IF TAKEN BY YOU</label>
          <div className="section-content">
            <input placeholder="GREEN STEEL CERTIFICATE" name="greenSteelCertificate" value={formData.greenSteelCertificate} onChange={handleInputChange} />
          </div>
        </div>

        {/* Signature */}
        {/* <div className="form-section">
          <div className="section-content">
            <label className="section-label">COMPANY SEAL & SIGNATURE</label>
            <div className="signature-box"></div>
          </div>
        </div> */}

        {/* Office */}
        <div className="form-section">
          <div className="section-content">
            <input placeholder="Membership No" name="membershipno" value={formData.membershipno} onChange={handleInputChange} />
            <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment} onChange={handleInputChange} />
          </div>
        </div>

        {/* MEMBERSHIP FEES TABLE */}
<div className="membership-fees-section">
  <h3 className="fees-title">
    AIIFA MEMBERSHIP FEES w. e. f. 01st OCTOBER, 2023
  </h3>

  <table className="fees-table">
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Category</th>
        <th>Annual Membership Fee</th>
        <th>Admission Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Life Members</td>
        <td>Rs. 5,00,000/- onetime fee (RCM Applicable)</td>
        <td>Nil</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Members (India)</td>
        <td>Rs. 15000/- Plus GST w.e.f. 01.10.2023</td>
        <td>Rs. 15000/-</td>
      </tr>

      <tr>
        <td></td>
        <td>Member (Abroad)</td>
        <td>US$. 500 w.e.f. 01.10.2023</td>
        <td>US$ 250</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Affiliate Member</td>
        <td>
          Rs. 20,000/- plus GST @ 18% w.e.f. 01.10.2023
          <br />
          (Companies from (b) to (e) of para 2.1 (i) of Bye-Laws)
        </td>
        <td>Rs. 15000/-</td>
      </tr>

      <tr>
        <td>4</td>
        <td>Associate Member</td>
        <td>
          Rs. 2000/- As in para 2.1 (i) (f) of Bye Laws
        </td>
        <td>Rs. 5000/-</td>
      </tr>
    </tbody>
  </table>

  <div className="notes-section">
    <strong>Note:</strong> The Membership Application Form is available at:  
    <span><a href="https://www.aaiifa.org/">www.aaiifa.org </a> </span>  
    GST is extra as per admissible
  </div>

{/* BANK DETAILS */}
<div className="bank-details-section">
  <h3 className="bank-title">Bank Details:</h3>

  <div className="bank-item">
    <strong>1. Axis Bank:</strong><br />
    196, Shalimar Bagh, Delhi-110088<br />
    <strong>A/c No.:</strong> 263010100094586<br />
    <strong>RTGS:</strong> UTIB0000263
  </div>

  <div className="bank-item">
    <strong>2. Yes Bank:</strong><br />
    D Mall, Netaji Subhash Place, Delhi-110034<br />
    <strong>A/c No.:</strong> 018494600000338 <br />
    <strong>IFSC: </strong> YESB0000184
  </div>
</div>

</div>


        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit Membership Form
          </button>
        </div>

      </form>

      {successMessage && <div className="success-toast">{successMessage}</div>}
    </div>
  );
};

export default AIIFAMembershipForm;
