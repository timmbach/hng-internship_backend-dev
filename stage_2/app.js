const express = require("express");
const dotenv = require("dotenv");
const fs = require("node:fs");
const mongoose = require("mongoose");
const { Person } = require("./models/personModel");

const app = express();

// Middleware for passing req.body

app.use(express.json());

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

const addPerson = async (req, res) => {
  //   const newId = users[users.length - 1].id + 1;

  const newPerson = {
    name: req.body.name,
  };

  //   users.push(newUser);

  const person = await Person.create(newPerson);

  try {
    if (!req.body.name) {
      return res.status(400).send({
        message: "Please add a name for this new person",
      });
    }
    return res.status(201).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find({});
    return res.status(200).json({
      count: persons.length,
      data: persons,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getPerson = async (req, res) => {
  try {
    const { name } = req.params;
    const person = await Person.findOne({ name: name });
    return res.status(200).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
const editPerson = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter the name of user to be updated",
    });
  }
  try {
    const { name } = req.params;
    updatedUserData = req.body;
    const person = await Person.findOneAndUpdate(
      { name: name },
      updatedUserData,
      { new: true }
    );
    if (!person) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    return res.status(200).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
const deletePerson = async (req, res) => {
  try {
    const { name } = req.params;
    const person = await Person.findOneAndDelete({ name: name });
    if (!person) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    return res
      .status(200)
      .send({ message: `${name} has been deleted successfully!` });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

app.route("/api").post(addPerson).get(getAllPersons);

app.route("/api/:name").get(getPerson).put(editPerson).delete(deletePerson);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
