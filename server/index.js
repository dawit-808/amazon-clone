const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = Math.round(Number(req.query.total) * 100);

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({
      message: "Total must be greater than 0",
    });
  }
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server running on http://localhost:5000");
});
