import WebSettings from "../models/WebSettings.js";
import SMTPSettings from "../models/SMTPSettings.js";
import { uploadImage } from "../helpers/uploadImage.js";
import { deleteImage } from "../helpers/deleteImage.js";

// --------------------- WEB SETTINGS ---------------------

// Get Web Settings
export const getWebSettings = async (req, res) => {
  try {
    const settings = await WebSettings.findOne();
    res.json({ success: true, settings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch web settings" });
  }
};

// Create or Update Web Settings 
export const saveWebSettings = async (req, res) => {
  try {
    const {
      name,
      phone,
      whatsapp,
      email,
      address,
      image,
      alt,
      googleMaps,
      facebook,
      instagram,
      youtube,
      linkedin,
      twitter,
      telegram,
    } = req.body;

    let settings = await WebSettings.findOne();

    let imageData = settings?.image || {};

    const isNewImage =
      image && typeof image === "string" && !image.includes("cloudinary.com");

    if (isNewImage) {
      if (settings?.image?.public_id) {
        await deleteImage(settings.image.public_id);
      }
      imageData = await uploadImage(image, alt || name);
    }

    if (settings) {
      settings = await WebSettings.findByIdAndUpdate(
        settings._id,
        {
          name,
          phone,
          whatsapp,
          email,
          address,
          image: imageData,
          googleMaps,
          facebook,
          instagram,
          youtube,
          linkedin,
          twitter,
          telegram,
        },
        { new: true }
      );
    } else {
      settings = await WebSettings.create({
        name,
        phone,
        whatsapp,
        email,
        address,
        image: imageData,
        googleMaps,
        facebook,
        instagram,
        youtube,
        linkedin,
        twitter,
        telegram,
      });
    }

    res.json({ success: true, settings });
  } catch (error) {
    console.error("WebSettings save error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to save web settings" });
  }
};

// --------------------- SMTP SETTINGS ---------------------

// Get SMTP Settings
export const getSMTPSettings = async (req, res) => {
  try {
    const settings = await SMTPSettings.findOne();
    res.json({ success: true, settings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch SMTP settings" });
  }
};

// Create or Update SMTP Settings
export const saveSMTPSettings = async (req, res) => {
  try {
    const {
      smtpHost,
      smtpPort,
      smtpUsername,
      smtpPassword,
      smtpFromName,
      smtpFromEmail,
      smtpEncryption,
    } = req.body;

    let settings = await SMTPSettings.findOne();

    if (settings) {
      // Update existing
      settings = await SMTPSettings.findByIdAndUpdate(
        settings._id,
        {
          smtpHost,
          smtpPort,
          smtpUsername,
          smtpPassword,
          smtpFromName,
          smtpFromEmail,
          smtpEncryption,
        },
        { new: true }
      );
    } else {
      // Create new
      settings = await SMTPSettings.create({
        smtpHost,
        smtpPort,
        smtpUsername,
        smtpPassword,
        smtpFromName,
        smtpFromEmail,
        smtpEncryption,
      });
    }

    res.json({ success: true, settings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to save SMTP settings" });
  }
};
