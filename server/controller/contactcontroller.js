import Contact from "../models/contactmodel.js";

// Get profile (only one document)
export const getcontact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

// Create or update profile
export const updatecontact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    if (contact) {
      contact = await Contact.findOneAndUpdate({}, req.body, {
        new: true,
      });
    } else {
      contact = await Contact.create(req.body);
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error saving profile" });
  }
};