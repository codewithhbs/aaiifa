import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (file, altText = "") => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: "teams",
    });

    return {
      public_id: result.public_id,
      url: result.secure_url,       
      public_url: result.url,        // Non-secure URL if you want to store it too
      alt: altText || "Team Member", // Default alt text
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Image upload failed");
  }
};
