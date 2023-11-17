module.exports = (app) => {
  const book = require("../controllers/book.controller.js");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", book.create);

  // Retrieve a single Tutorial with id
  router.get("/:id", book.findOne);

  // Update a Tutorial with id
  router.put("/:id", book.update);

  // Delete a Tutorial with id
  router.delete("/:id", book.delete);

  app.use("/api/books", router);
};
