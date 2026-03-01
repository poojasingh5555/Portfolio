import mongoose from "mongoose";

const urlValidator = {
  validator: (v) => !v || /^(https?:\/\/)/.test(v),
  message: (props) => `${props.value} is not a valid URL!`,
};

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    shortBio: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },


    resumeLink: {
      type: String,
      trim: true,
      validate: urlValidator,
    },

   

    socialLinks: {
      github: {
        type: String,
        trim: true,
        validate: urlValidator,
      },
      linkedin: {
        type: String,
        trim: true,
        validate: urlValidator,
      },
      gfg: {
        type: String,
        trim: true,
        validate: urlValidator,
      },
    },

    aboutStory: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v) => !v || /^\S+@\S+\.\S+$/.test(v),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },

    phone: {
      type: String,
      trim: true,
      validate: {
        validator: (v) => !v || /^\+?\d{7,15}$/.test(v),
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);