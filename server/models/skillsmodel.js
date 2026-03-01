import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, min: 1, max: 100 },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "Tools"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);