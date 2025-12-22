import SteelQuery from "../models/SteelQuery.js";

// ---------------- Submit Steel Handbook Query ----------------
export const createSteelQuery = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, address, message } = req.body;
    if (!firstName || !lastName || !phone) {
      return res.status(400).json({
        success: false,
        message: "First name, last name, and phone are required fields",
      });
    }

    const query = await SteelQuery.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      message,
    });

    res.status(201).json({
      success: true,
      message:
        "Thank you for your inquiry! Our team will contact you shortly.",
      data: query,
    });
  } catch (error) {
    console.error("Steel Query Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit query",
      error: error.message,
    });
  }
};

// ---------------- Get All Queries (Admin) ----------------
export const getSteelQueries = async (req, res) => {
  try {
    const queries = await SteelQuery.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: queries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch queries",
    });
  }
};

// ---------------- Delete Query ----------------
export const deleteSteelQuery = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await SteelQuery.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Query deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete query",
    });
  }
};
