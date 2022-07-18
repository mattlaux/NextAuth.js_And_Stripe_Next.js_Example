import { useSession, getSession } from "next-auth/react";
import { NextPage, NextPageContext } from "next";
import { signOut } from "next-auth/react";
import { handleCheckout } from "../library/handleCheckout";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome {session?.user.name}</h1>
      {session?.user.isPro ? (
        <h2>You have a pro subscription</h2>
      ) : (
        <h2>You do not have a pro subscription</h2>
      )}
      <button onClick={() => handleCheckout()}>
        Upgrade to Pro Subscription
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          // Nextauth function to initiate user signout flow
          // https://next-auth.js.org/getting-started/client#signout
          signOut({ callbackUrl: "/" });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
