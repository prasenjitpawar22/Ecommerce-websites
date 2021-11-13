const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var pincodeDirectory = require("india-pincode-lookup");

app.use(cors());
app.use(express.json());

try {
  //connect to mongoose
  const url = `mongodb+srv:connect`;
  const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
} catch (err) {
  console.log(err);
}

//login authentication
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

// get the pincode
app.post("/api/get-pin-code", async (req, res) => {
  const deliveryAvailable = ["Aurangabad", "Delhi", "Pune", "Ernakulam"];
  try {
    const pinCodeData = pincodeDirectory.lookup(req.body.pincode);
    const districtName = pinCodeData[0].districtName;
    console.log(pinCodeData[0]);
    for (var i = 0; i < deliveryAvailable.length; i++) {
      if (districtName === deliveryAvailable[i])
        return res.json({ status: "available", districtName: districtName });
    }
    return res.json({
      status: "error",
      data: districtName,
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
