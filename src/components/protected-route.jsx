import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) {
    return null; // أو Loader
  }

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // اعمل شرط الـonboarding بعد ما تتأكد إن البيانات كاملة
  if (isLoaded && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

export default ProtectedRoute;
