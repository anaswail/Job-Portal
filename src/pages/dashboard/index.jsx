import { Button } from "@/components/ui/button";
import {
  LogOut,
  Package,
  PanelLeftClose,
  PanelLeftOpen,
  ShoppingBag,
  ShoppingBasket,
  SquareChartGantt,
  UsersRound,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const sidebarItems = [
  {
    name: "Overview",
    path: "overview",
    icon: <SquareChartGantt size={22} />,
  },
  {
    name: "Product CRUD",
    path: "product-crud",
    icon: <Package size={22} />,
  },
  {
    name: "All Products",
    path: "products-overview",
    icon: <ShoppingBasket size={22} />,
  },
  {
    name: "Customers",
    path: "customers",
    icon: <UsersRound size={22} />,
  },
  {
    name: "Orders",
    path: "orders",
    icon: <ShoppingBag size={22} />,
  },
];

const Dashboard = () => {
  const { signOut } = useClerk();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      await signOut();
      window.location.assign("/");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="fixed inset-0 w-full h-screen bg-background z-50 flex overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-primary text-primary-foreground p-2.5 rounded-md shadow-md hover:bg-primary/90 transition-colors"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Desktop expand button when collapsed */}
      {isCollapsed && (
        <div className="hidden lg:flex w-12 flex-shrink-0 items-start">
          <PanelLeftOpen
            className="m-3 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            size={22}
            onClick={() => setIsCollapsed(false)}
          />
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`h-full bg-card text-card-foreground flex-shrink-0 py-6 px-4 relative
          fixed lg:static top-0 left-0 z-50 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${isCollapsed ? "hidden lg:hidden" : "block"}
          w-64 sm:w-72 lg:w-80 xl:w-[22rem]
          shadow-2xl lg:shadow-none overflow-y-auto`}
      >
        {/* Close button for mobile */}
        <button
          onClick={closeSidebar}
          className="lg:hidden absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Desktop collapse button */}
        {!isCollapsed && (
          <PanelLeftClose
            className="hidden lg:block absolute top-6 right-4 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            size={20}
            onClick={() => setIsCollapsed(true)}
          />
        )}

        <h1 className="text-2xl sm:text-3xl font-extrabold mb-8 px-3 mt-8 lg:mt-0">
          <Link to="/" onClick={closeSidebar} className="text-foreground">
            Neo<span className="text-primary">Tech</span>
          </Link>
        </h1>

        <nav>
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const active = location.pathname.includes(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeSidebar}
                    className={`px-3 sm:px-4 py-2.5 rounded-md font-semibold flex gap-3 items-center text-sm sm:text-base w-full transition-colors
                    ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-foreground text-muted-foreground"}`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Button
            onClick={handleLogout}
            className="mt-8 w-full sm:w-5/6 lg:w-3/4 rounded-md p-3 sm:p-4 gap-3 text-base"
            variant="destructive"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 transition-all duration-300 w-full`}
      >
        <div className="pt-12 lg:pt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
