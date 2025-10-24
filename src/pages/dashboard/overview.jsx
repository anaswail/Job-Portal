import { Dot, Clipboard, Percent, User, Ellipsis } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import productImg from "@/public/companies/google.webp"; // fallback asset

const Overview = () => {
  const { user } = useUser();

  const topProducts = [
    {
      id: 0,
      title: "ASUS Vivobook S16 laptops",
      img: productImg,
      sales: 1234,
      price: 124,
      orderCount: 110,
      remaining: 50,
    },
    {
      id: 1,
      title: "Fastrack FS1 Pro Smartwatch",
      img: productImg,
      sales: 1530,
      price: 412,
      orderCount: 231,
      remaining: 23,
    },
    {
      id: 2,
      title: "Acer Chromebook Plus 515",
      img: productImg,
      sales: 2530,
      price: 212,
      orderCount: 143,
      remaining: 43,
    },
  ];

  const latestOrders = [
    {
      orderId: "#2456JL",
      title: "Nike Sportswear",
      orderDate: "Jan 12, 12:23 pm",
      price: "134.00",
      payment: "Transfer",
      Status: "Processing",
    },
    {
      orderId: "#3456AC",
      title: "Acqua di parma",
      orderDate: "Jan 01, 09:13 pm",
      price: "234.00",
      payment: "Credit Card",
      Status: "Completed",
    },
    {
      orderId: "#3566L",
      title: "Nike Aqua",
      orderDate: "May 12, 12:23 am",
      price: "313.00",
      payment: "Transfer",
      Status: "Completed",
    },
  ];

  const avatarUrl = user?.imageUrl;
  const fullName = user?.fullName || user?.firstName || "User";
  const email = user?.primaryEmailAddress?.emailAddress || "";

  return (
    <div className="my-4 sm:my-6 lg:my-8 max-w-[90%] md:max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium">
            Welcome Back, {" "}
            <span className="font-bold text-primary">{fullName}!</span>
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
            Here's Your Current Sales Overview
          </p>
        </div>
        <div className="flex gap-3 sm:gap-5 items-center">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
            {avatarUrl ? (
              <img src={avatarUrl} alt={fullName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>
          <div>
            <p className="font-semibold text-base sm:text-xl">{fullName}</p>
            <p className="text-xs sm:text-sm text-muted-foreground truncate max-w-[200px]">
              {email}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
        {/* Total Orders Card */}
        <div className="bg-primary text-primary-foreground p-4 sm:p-5 relative rounded-lg shadow-lg">
          <h1 className="text-lg sm:text-xl font-semibold">
            Total Orders <span className="text-[10px] font-normal">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl font-semibold">1,050</p>
          <p className="text-xs">
            <span className="text-emerald-200 font-semibold">+10%</span> From last month
          </p>
          <span className="bg-card absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm text-card-foreground/80">
            <Clipboard size={18} />
          </span>
        </div>

        {/* Total Sales Card */}
        <div className="bg-card p-4 sm:p-5 relative rounded-lg shadow-lg">
          <h1 className="text-lg sm:text-xl font-semibold">
            Total sales <span className="text-[10px] font-normal">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl font-semibold">$56,093</p>
          <p className="text-xs">
            <span className="text-emerald-600 font-semibold">+5%</span> From last month
          </p>
          <span className="bg-muted absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm">
            <Percent size={18} />
          </span>
        </div>

        {/* Customers Card */}
        <div className="bg-card p-4 sm:p-5 relative rounded-lg shadow-lg sm:col-span-2 lg:col-span-1">
          <h1 className="text-lg sm:text-xl font-semibold">
            Customers <span className="text-[10px] font-normal">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl font-semibold">300</p>
          <p className="text-xs">
            <span className="text-emerald-600 font-semibold">+15%</span> From last month
          </p>
          <span className="bg-muted absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm">
            <User size={18} />
          </span>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm mb-8">
        <table className="w-full border border-border rounded-lg overflow-hidden min-w-[640px]">
          <thead className="bg-card">
            <tr>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Top Selling Products
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Price
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Orders
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id} className="bg-card hover:bg-muted/40 transition-colors">
                <td className="py-3 sm:py-4 px-3 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm sm:text-base font-medium">{product.title}</p>
                      <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                        {product.sales} sales
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                  ${product.price}
                </td>
                <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                  {product.orderCount}
                </td>
                <td className="text-center py-3 sm:py-4 px-3 sm:px-4">
                  <p className="flex justify-center items-center text-emerald-600 text-xs sm:text-sm">
                    <Dot size={22} /> Available
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">{product.remaining} stocks</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Latest Orders Table */}
      <h1 className="text-lg sm:text-xl font-bold bg-card p-4 sm:p-5 w-full rounded-t-lg">
        Latest Orders
      </h1>
      <div className="overflow-x-auto rounded-b-lg shadow-sm">
        <table className="w-full border border-t-0 border-border rounded-b-lg overflow-hidden min-w-[768px]">
          <thead className="bg-card">
            <tr>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Order ID
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Product
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Order Date
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Price
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Payment
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base">
                Status
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-4 border-b border-border text-sm sm:text-base"></th>
            </tr>
          </thead>
          <tbody>
            {latestOrders.length > 0 ? (
              latestOrders.map((order, id) => (
                <tr key={id} className="border-b border-border bg-card hover:bg-muted/40 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    {order.orderId}
                  </td>
                  <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                    {order.title}
                  </td>
                  <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm text-muted-foreground">
                    {order.orderDate}
                  </td>
                  <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    ${order.price}
                  </td>
                  <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                    {order.payment}
                  </td>
                  <td
                    className={`text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium ${
                      order.Status === "Completed" ? "text-emerald-600" : "text-blue-600"
                    }`}
                  >
                    {order.Status}
                  </td>
                  <td className="text-center py-3 sm:py-4 px-3 sm:px-4 cursor-pointer">
                    <Ellipsis size={18} className="mx-auto hover:text-primary transition-colors" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-10 text-center">
                  <h1 className="text-lg sm:text-xl font-bold text-muted-foreground">No orders yet</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
