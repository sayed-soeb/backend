const Item = require('../models/item');

// Get all items with pagination
const ITEMS_PER_PAGE = 10;

exports.getItems = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters
    const skip = (page - 1) * ITEMS_PER_PAGE; // Calculate the number of items to skip

    const totalItems = await Item.countDocuments();
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const items = await Item.find()
      .skip(skip)
      .limit(ITEMS_PER_PAGE)
      .exec();

    res.json({
      items,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific item by ID
exports.getItemById = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

// Create a new item
exports.createItem = async (req, res, next) => {
  try {
    const newItem = req.body;
    const createdItem = await Item.create(newItem);
    res.status(201).json(createdItem);
  } catch (error) {
    next(error);
  }
};

// Update an existing item
exports.updateItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const item = await Item.findByIdAndUpdate(itemId, updatedItem, { new: true });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

// Delete an item
exports.deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    next(error);
  }
};
