// userController.js

const User = require('../../models/airtime');

// Example controller function to handle a specific route
const postAirtime = async (req, res) => {
  try {
    const { telcoProvider, modemNumber, amount } = req.body;
    const newUser = new User({
      telcoProvider,
      modemNumber,
      amount
    });

  const response = await newUser.save();
    res.status(201).json(response);
    console.log(response, "airtime added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
};

module.exports = {
  postAirtime, // Export the controller function
};
