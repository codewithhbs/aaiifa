import cloudinary from "../config/cloudinary.js";

export const deleteImage = async (publicId) => {
  try {
    if (!publicId) return;

    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Cloudinary image deleted:", result);
    return result;
  } catch (error) {
    console.error("Cloudinary image deletion failed:", error);
  }
};
