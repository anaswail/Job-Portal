import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import JobListing from "./pages/job-listing";
import Job from "./pages/job";
import MyJobs from "./pages/my-jobs";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import SavedJob from "./pages/saved-job";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoutes from "./components/protected-route";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoutes>
              <Onboarding />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoutes>
              <JobListing />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/post-job",
          element: (
            <ProtectedRoutes>
              <PostJob />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoutes>
              <MyJobs />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/saved-jobs",
          element: (
            <ProtectedRoutes>
              <SavedJob />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoutes>
              <Job />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
