import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-8 text-center bg-gray-800 mt-10 sm:mt-5">
        Made by{" "}
        <a
          href="https://github.com/anaswail/"
          target="_blank"
          className="p-1 hover:text-white hover:border-black hover:bg-black rounded-sm transition-all border-2 border-white bg-white text-black font-bold duration-200 "
        >
          Anas
        </a>{" "}
        , All rights reserved @2025
      </div>
    </div>
  );
};

export default AppLayout;
