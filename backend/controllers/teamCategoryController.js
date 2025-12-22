import TeamCategory from "../models/TeamCategory.js";

// ---------------- Create Category ----------------
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const exists = await TeamCategory.findOne({ name });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await TeamCategory.create({ name });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create category",
    });
  }
};

// ---------------- Update Category ----------------
export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    // Check if category exists
    const category = await TeamCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check duplicate name (excluding current category)
    const exists = await TeamCategory.findOne({
      name,
      _id: { $ne: req.params.id },
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Category name already exists",
      });
    }

    category.name = name;
    await category.save();
    
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    console.error("Update category error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update category",
    });
  }
};



// ---------------- Get Categories ----------------
export const getCategories = async (req, res) => {
  try {
    const categories = await TeamCategory.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};



// ---------------- Toggle Category Status ----------------
export const toggleCategoryStatus = async (req, res) => {
  try {
    const category = await TeamCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Toggle status
    category.status = !category.status;
    await category.save();

    res.status(200).json({
      success: true,
      message: "Category status updated successfully",
      status: category.status,
    });
  } catch (error) {
    console.error("Status toggle error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update category status",
    });
  }
};


// ---------------- Delete Category ----------------
export const deleteCategory = async (req, res) => {
  try {
    await TeamCategory.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete category",
    });
  }
};
