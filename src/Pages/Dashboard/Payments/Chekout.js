import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Chekout = ({ data }) => {
  const { setproductAvailable, productAvailable } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setcardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState();
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { price, itemName, userName, email, _id } = data;
  console.log("Checkout page Price: ", data);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://a-12-chakka-server-side.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("chaka-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log('[error]', error);
      setcardError(error.message);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setcardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: data.email,
            name: data.userName,
          },
        },
      });

    if (confirmError) {
      setcardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Your Payment Completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        itemName,
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("https://a-12-chakka-server-side.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("chaka-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("https://a-12-chakka-server-side.vercel.app/updateAdvertise", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("chaka-token")}`,
            },
            body: JSON.stringify(payment),
          });
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
    console.log("Payment INtent", paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className=" px-3 py-2">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#FFA836",
                "::placeholder": {
                  color: "#FFA836",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success block w-[100%] mt-10"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {<p className="text-red-800">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-500 text-center">{success}</p>
          <p className="p-4 text-center">
            <p className="text-center text-success"> Your transactionId:</p>
            <span className="text-red-800">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Chekout;
