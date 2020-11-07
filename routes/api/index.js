const router = require("express").Router();
// const bookRoutes = require("./books");

// API routes
router.get('/toast', (req, res) => {
  res.send('mmmmmm toast :)');
});

module.exports = router;
