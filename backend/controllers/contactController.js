import Contact from "../models/Contact.js";

// -------------------- Get All Contacts --------------------
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};


// -------------------- Submit Contact Inquiry --------------------
export const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Basic validation
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "name and phone fields are required",
      });
    }

    const newContact = await Contact.create({
      name,
      phone,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact inquiry submitted successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Error submitting contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact inquiry",
      error: error.message,
    });
  }
};


// -------------------- Delete a Contact by ID --------------------
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete contact",
      error: error.message,
    });
  }
};
