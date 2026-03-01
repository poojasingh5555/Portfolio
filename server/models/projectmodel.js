import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length > 0, "At least one tech stack required"],
    },
    githubLink: {
      type: String,
      validate: {
        validator: (v) => !v || /^(https?:\/\/)/.test(v),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    liveLink: {
      type: String,
      validate: {
        validator: (v) => !v || /^(https?:\/\/)/.test(v),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    image: String,
    featured: { type: Boolean, default: false },
    slug: { type: String, unique: true, lowercase: true },
  },
  { timestamps: true }
);

projectSchema.pre("save", function (next) {
  if (this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
 
});

export default mongoose.model("Project", projectSchema);