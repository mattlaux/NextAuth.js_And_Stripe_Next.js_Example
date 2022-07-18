import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        // NextAuth function to initiate user authentication flow
        // https://next-auth.js.org/getting-started/client#signin
        signIn(undefined, { callbackUrl: "/dashboard" });
      }}
    >
      Login
    </button>
  );
};

export default Home;
