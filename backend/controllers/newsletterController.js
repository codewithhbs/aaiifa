import Newsletter from "../models/Newsletter.js";

// ---------------- Subscribe Newsletter ----------------
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed",
      });
    }

    const subscriber = await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message:
        "Thank you for subscribing! You’ll now receive our latest updates.",
      data: subscriber,
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to subscribe. Please try again later.",
    });
  }
};

// ---------------- Get All Subscribers (Admin) ----------------
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch subscribers",
    });
  }
};

// ---------------- Delete Subscriber ----------------
export const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Newsletter.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscriber removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete subscriber",
    });
  }
};
