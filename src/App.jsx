import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import LandingPage from "./pages/landing";
import JobListing from "./pages/job-listing";
import Job from "./pages/job";
import MyJobs from "./pages/my-jobs";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import SavedJob from "./pages/saved-job";
import Dashboard from "./pages/dashboard";
import DashboardDemo from "./pages/dashboard-demo";
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
        {
          path: "/dashboard-demo",
          element: <DashboardDemo />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoutes>
          <DashboardLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        // Add more dashboard routes here as needed
        // {
        //   path: "products",
        //   element: <Products />,
        // },
        // {
        //   path: "orders",
        //   element: <Orders />,
        // },
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
