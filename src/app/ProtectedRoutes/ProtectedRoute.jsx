"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // redirect if not logged in
    }
  }, [loading, user, router]);

  if (loading) {
    return <h1>Loading...</h1>; // or a spinner
  }

  if (user) {
    return children;
  }

  return null; // while redirecting
};

export default PrivateRoute;
