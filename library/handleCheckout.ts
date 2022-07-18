import { fetchPostJSON } from "./fetchPostJSON";
import { AMOUNT } from "../stripe.config";
import getStripe from "./getStripe";

export const handleCheckout = async () => {
  // Create a Checkout Session.
  const response = await fetchPostJSON("/api/stripe/checkoutSession", {
    amount: AMOUNT,
  });
  if (response.statusCode === 500) {
    console.error(response.message);
  }
  // Redirect to Checkout.
  const stripe = await getStripe();
  const { error } = await stripe!.redirectToCheckout({
    sessionId: response.id,
  });
  console.warn(error.message);
};
