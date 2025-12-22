import Team from "../models/Team.js";
import { uploadImage } from "../helpers/uploadImage.js";
import { deleteImage } from "../helpers/deleteImage.js";

/* =====================================================
   CREATE TEAM
===================================================== */
export const createTeam = async (req, res) => {
  try {
    const {
      category,
      name,
      company,
      designation,
      bio,
      status,
      image,
      alt,
      order,
    } = req.body;

    if (!category || !name || !designation) {
      return res.status(400).json({
        success: false,
        message: "Category, name and designation are required",
      });
    }

    let imageData = {};
    if (image) {
      imageData = await uploadImage(image, alt || name);
    }

    const team = await Team.create({
      category,
      name,
      company,
      designation,
      bio,
      status,
      order,
      image: imageData,
    });

    res.status(201).json({
      success: true,
      message: "Team member created successfully",
      data: team,
    });
  } catch (error) {
    console.error("Create team error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create team member",
    });
  }
};

/* =====================================================
   GET ALL TEAMS (OPTIONAL CATEGORY FILTER)
===================================================== */
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate("category", "name") 
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: teams,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch teams",
    });
  }
};


/* =====================================================
   GET SINGLE TEAM
===================================================== */
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate(
      "category",
      "name"
    );

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch team",
    });
  }
};

/* =====================================================
   UPDATE TEAM
===================================================== */
export const updateTeam = async (req, res) => {
  try {
    const {
      category,
      name,
      company,
      designation,
      bio,
      status,
      image,
      alt,
      order,
    } = req.body;

    const existingTeam = await Team.findById(req.params.id);
    if (!existingTeam) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    let imageData = existingTeam.image;

    // Check if a NEW base64 image is sent
    const isNewImage =
      image &&
      typeof image === "string" &&
      !image.startsWith("http");

    if (isNewImage) {
      // Delete old image
      if (existingTeam.image?.public_id) {
        await deleteImage(existingTeam.image.public_id);
      }

      imageData = await uploadImage(image, alt || name);
    }

    const updatedTeam = await Team.findByIdAndUpdate(
      req.params.id,
      {
        category,
        name,
        company,
        designation,
        bio,
        status,
        order,
        image: imageData,
      },
      { new: true }
    ).populate("category", "name");

    res.status(200).json({
      success: true,
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    console.error("Update team error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update team",
    });
  }
};

/* =====================================================
   DELETE TEAM
===================================================== */
export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team not found",
      });
    }

    // Delete image from cloud
    if (team.image?.public_id) {
      await deleteImage(team.image.public_id);
    }

    await team.deleteOne();

    res.status(200).json({
      success: true,
      message: "Team deleted successfully",
    });
  } catch (error) {
    console.error("Delete team error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete team",
    });
  }
};
