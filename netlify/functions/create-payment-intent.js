require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51LAcbuFzEuHtMw6AfPT1VFGJTaXR4U8tvOzrC0zCk2vOtZQFGWuC7PpAsKYfx6FEKTpRZhc8xoKXm0S3YzQJ7WzX00Iu9ElMjZ"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
