import mongoose from "mongoose";

const webSettingsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    whatsapp: { type: String, trim: true },
    email: { type: String, trim: true },
    address: { type: String, trim: true },
    image: {
        url: { type: String, trim: true },
        public_id: { type: String, trim: true },
        public_url: { type: String, trim: true },
        alt: { type: String, trim: true },
        }, 
    googleMaps: { type: String, trim: true },
    facebook: { type: String, trim: true },
    instagram: { type: String, trim: true },
    youtube: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    twitter: { type: String, trim: true },
    telegram: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("WebSettings", webSettingsSchema);
