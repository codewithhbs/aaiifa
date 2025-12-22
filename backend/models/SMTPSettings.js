import mongoose from "mongoose";

const smtpSettingsSchema = new mongoose.Schema(
  {
    smtpHost: { type: String, required: true, trim: true },
    smtpPort: { type: Number, required: true },
    smtpUsername: { type: String, required: true, trim: true },
    smtpPassword: { type: String, required: true, trim: true },
    smtpFromName: { type: String, trim: true },
    smtpFromEmail: { type: String, trim: true },
    smtpEncryption: { type: String, enum: ["ssl", "tls", ""], default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("SMTPSettings", smtpSettingsSchema);
