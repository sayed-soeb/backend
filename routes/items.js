const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const authenticateToken = require('../middleware/authMiddleware');

// Retrieve all items
router.get('/items', itemsController.getItems);

// Retrieve a specific item by ID
router.get('items/:id', itemsController.getItemById);

// Create a new item (protected route)
router.post('/items', authenticateToken, itemsController.createItem);

// Update an existing item (protected route)
router.put('items/:id', authenticateToken, itemsController.updateItem);

// Delete an item (protected route)
router.delete('items/:id', authenticateToken, itemsController.deleteItem);

module.exports = router;
