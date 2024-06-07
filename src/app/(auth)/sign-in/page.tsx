"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 py-1 m-4 text-xl "
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
