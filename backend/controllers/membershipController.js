import Membership from "../models/Membership.js";

// -------------------- Get All Memberships --------------------
export const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Memberships fetched successfully",
      data: memberships,
    });
  } catch (error) {
    console.error("Error fetching memberships:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch memberships",
      error: error.message,
    });
  }
};

// -------------------- Create a New Membership --------------------
export const createMembership = async (req, res) => {
  try {

    console.log("Request Body:", req.body); // Debugging line
    
    const newMembership = new Membership(req.body);
    await newMembership.save();

    res.status(201).json({
      success: true,
      message: "Membership created successfully",
      data: newMembership,
    });
  } catch (error) {
    console.error("Error creating membership:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create membership",
      error: error.message,
    });
  }
};

// -------------------- Delete a Membership by ID --------------------
export const deleteMembership = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMembership = await Membership.findByIdAndDelete(id);
    if (!deletedMembership) {
      return res.status(404).json({
        success: false,
        message: "Membership not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Membership deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting membership:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete membership",
      error: error.message,
    });
  }
};
