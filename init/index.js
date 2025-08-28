const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");

    // Delete all existing listings
    await Listing.deleteMany({});

    // Transform data while keeping image as object
    const transformedData = initData.data.map((item) => ({
      ...item,
      owner: "68a6da03b72280d1f0119cf8", // make sure this user exists
      image: item.image || { url: "", filename: "default.jpg" },
    }));

    // Insert listings
    await Listing.insertMany(transformedData);
    console.log("Listings inserted successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
};

// Run seeding
seedDB();
