import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamCategory",
      required: true,
    },

     order: {
      type: Number,
      default: 0,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
    },

    designation: {
      type: String,
      trim: true,
    },

    bio: {
      type: String,
      trim: true,
    },

    status: {
      type: Boolean,
      default: true,
    },

    image: {
      url: String,
      public_id: String,
      public_url: String,
      alt: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
