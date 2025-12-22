import Membership from "../models/Membership.js";
import Team from "../models/Team.js";
import SteelHandbook from "../models/SteelQuery.js";
import Newsletter from "../models/Newsletter.js";
import Contact from "../models/Contact.js";
import Category from "../models/TeamCategory.js";

export const dashboardStats = async (req, res) => {
  try {
    const [
      memberships,
      teams,
      steelHandbook,
      newsletter,   
      contact,
      categories,
    ] = await Promise.all([
      Membership.countDocuments(),
      Team.countDocuments(),
      SteelHandbook.countDocuments(),
      Newsletter.countDocuments(),
      Contact.countDocuments(),
      Category.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: {
        memberships,
        teams,
        steelHandbook,
        newsletter,
        contact,
        categories,
      },
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard stats",
    });
  }
};
