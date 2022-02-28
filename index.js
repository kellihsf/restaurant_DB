const Sequelize = require("sequelize");

const { Restaurant } = require("./models");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET all Restaurants
app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll({});
  res.json(restaurants);
});

// Get a single restaurant by ID
// app.get("/restaurants/:id", async (req, res) => {
//  try {
//   const restaurantID = req.params.id;
//   const oneRestaurant = await Restaurant.findbyPk(restaurantID)
//   res.json(oneRestaurant);
//  } catch (event) {
//    console.log(event)
//    res.status(404).json({
//      message: "Restaurant not found",
//    })
//  }
// })

// Create new restaurant
app.post("/restaurants", async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
  const { name, address, category } = req.body;
  const newRestaurant = await Restaurant.create({
    name,
    address,
    category,
  });
  // Send back the new restaurant's ID in the response:
  res.json({
    id: newRestaurant.id,
  });
});

// Update an existing Restaurant
app.post("/restaurants/:id", async (req, res) => {
  const { id } = req.params;

  const updatedRestaurant = await Restaurant.update(req.body, {
    where: {
      id,
    },
  });
  res.json(updatedRestaurant);
});

// Delete a restaurant
app.delete("/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRestaurant = await Restaurant.destroy({
    where: {
      id,
    },
  });
  res.json(deletedRestaurant);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
