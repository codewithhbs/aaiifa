import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    // 1. Company
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    // 2. Factory Address
    factoryDistrict: { type: String, trim: true },
    factoryCity: { type: String, trim: true },
    factoryPinCode: { type: String, trim: true },

    factoryMobile: {
      type: String,
      required: true,
      trim: true,
    },

    factoryPhone: {
      type: String,
      required: true,
      trim: true,
    },

    factoryEmail1: { type: String, trim: true },
    factoryEmail2: { type: String, trim: true },

    // 3. Correspondence Address
    correspondenceDistrict: { type: String, trim: true },
    correspondenceCity: { type: String, trim: true },
    correspondencePinCode: { type: String, trim: true },
    correspondenceMobile: { type: String, trim: true },
    correspondencePhone: { type: String, trim: true },
    correspondenceEmail1: { type: String, trim: true },
    correspondenceEmail2: { type: String, trim: true },

    // 4. Representative
    representativeName: { type: String, trim: true },
    designation: { type: String, trim: true },
    representativeMobile: { type: String, trim: true },
    representativePhone: { type: String, trim: true },
    representativeEmail: { type: String, trim: true },

    // 5. GST & Furnace
    gstNumber: { type: String, trim: true },
    furnaceCapacity: { type: String, trim: true },
    furnaceMake: { type: String, trim: true },
    numberOfCrucible: { type: String, trim: true },

    productIngot: { type: Boolean, default: false },
    productBillet: { type: Boolean, default: false },

    // 6. Raw Materials
    dri: { type: String, trim: true },
    pellet: { type: String, trim: true },
    importedScrap: { type: String, trim: true },
    indigenousScrap: { type: String, trim: true },

    // 7. DRI / Pellet Manufacturer
    driManufacturer: {
      type: String,
      enum: ["YES", "NO", ""],
      default: "",
    },
    processRouteGasBased: { type: Boolean, default: false },
    processRouteCoalBased: { type: Boolean, default: false },
    technology: { type: String, trim: true },
    annualCapacity: { type: String, trim: true },

    pelletProcess: { type: String, trim: true },
    pelletAnnualCapacity: { type: String, trim: true },

    // 8. Rolling Mill
    rollingMillIntegrated: { type: Boolean, default: false },
    rollingMillSisterConcern: { type: Boolean, default: false },

    // 9. Mill Capacity
    millCapacityRoughing: { type: String, trim: true },
    millCapacityIntermediate: { type: String, trim: true },
    millCapacityFinishing: { type: String, trim: true },

    // 10. Products
    productTMT: { type: Boolean, default: false },
    productStructure: { type: Boolean, default: false },
    productOther: { type: Boolean, default: false },
    otherProductName: { type: String, trim: true },

    // 11. Brand & Power
    brandName: { type: String, trim: true },
    powerConnectingLoad: { type: String, trim: true },

    // 12. Procurement
    procurementSelfGenerating: { type: Boolean, default: false },
    procurementState: { type: Boolean, default: false },
    procurementOpenAccess: { type: Boolean, default: false },

    // Certifications
    bisCertificationMark: { type: String, trim: true },
    greenSteelCertificate: { type: String, trim: true },

    // Office Use
    membershipno: { type: String, trim: true },
    dateOfEnrollment: { type: Date },

    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
