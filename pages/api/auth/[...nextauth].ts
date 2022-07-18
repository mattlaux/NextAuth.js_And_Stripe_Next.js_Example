import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../prisma/sharedClient";
import Stripe from "stripe";

// https://next-auth.js.org/getting-started/example
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID || "",
      clientSecret: process.env.AUTH0_SECRET || "",
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    // Adds userId, stripeCustomerId, and isPro boolean from DB to the default session values
    session: async ({ session, user }) => {
      if (typeof user.id === "string") session.user.id = user.id;
      if (typeof user.stripeCustomerId === "string") {
        session.user.stripeCustomerId = user.stripeCustomerId;
      }
      if (typeof user.isPro === "boolean") session.user.isPro = user.isPro;
      return Promise.resolve(session);
    },
  },
  events: {
    // Creates a Stripe customer and populates database on signup
    createUser: async ({ user }) => {
      // Create stripe API client using the secret key env variable
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2020-08-27",
      });

      // Create a stripe customer for the user with their email address
      await stripe.customers
        .create({
          email: user.email!,
        })
        .then(async (customer) => {
          // Use the Prisma Client to update the user in the database with their new Stripe customer ID
          return prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id,
            },
          });
        });
    },
  },
});
