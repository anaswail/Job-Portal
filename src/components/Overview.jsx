import { useState } from "react";
import { Clipboard, Dot, Ellipsis, Percent, User } from "lucide-react";

// Mock user data - replace with actual user data from your auth system
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: {
    secure_url: null
  }
};

// Mock product images - replace with actual images
const productImg = "/public/anas-projects-logo.png";
const productImg2 = "/public/anas-projects-logo.png";
const productImg3 = "/public/anas-projects-logo.png";

// Default profile image
const profileImg = "/public/anas-projects-logo.png";

const Overview = () => {
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
      img: productImg2,
      sales: 1530,
      price: 412,
      orderCount: 231,
      remaining: 23,
    },
    {
      id: 2,
      title: "Acer Chromebook Plus 515",
      img: productImg3,
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

  return (
    <div className="my-4 sm:my-6 lg:my-8 max-w-[90%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="header flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6 sm:mb-8">
        <div className="left-side">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Welcome Back,{" "}
            <span className="font-bold text-primary">
              {user?.name} !
            </span>
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
            Here's Your Current Sales Overview
          </p>
        </div>
        <div className="info flex gap-3 sm:gap-5 items-center">
          <div className="h-10 w-10 sm:h-12 sm:w-12 bg-card rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
            <img
              src={user?.avatar?.secure_url || profileImg}
              alt={user?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text">
            <p className="font-semibold text-base sm:text-xl">{user?.name}</p>
            <p className="text-xs sm:text-sm text-muted-foreground truncate max-w-[200px]">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="statistics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
        {/* Total Orders Card */}
        <div className="bg-primary text-primary-foreground p-4 sm:p-5 lg:p-6 relative rounded-lg shadow-lg">
          <h1 className="text-lg sm:text-xl font-semibold">
            Total Orders{" "}
            <span className="text-xs font-normal opacity-80">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl lg:text-3xl font-semibold">
            1,050
          </p>
          <p className="text-xs sm:text-sm">
            <span className="text-green-300 font-semibold">+10%</span> From last
            month
          </p>
          <span className="bg-background/20 absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm">
            <Clipboard size={20} />
          </span>
        </div>

        {/* Total Sales Card */}
        <div className="bg-card p-4 sm:p-5 lg:p-6 relative rounded-lg shadow-lg border border-border">
          <h1 className="text-lg sm:text-xl font-semibold">
            Total sales{" "}
            <span className="text-xs font-normal text-muted-foreground">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl lg:text-3xl font-semibold">
            $56,093
          </p>
          <p className="text-xs sm:text-sm">
            <span className="text-green-600 font-semibold">+5%</span> From last
            month
          </p>
          <span className="bg-muted absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm">
            <Percent size={20} />
          </span>
        </div>

        {/* Customers Card */}
        <div className="bg-card p-4 sm:p-5 lg:p-6 relative rounded-lg shadow-lg border border-border sm:col-span-2 lg:col-span-1">
          <h1 className="text-lg sm:text-xl font-semibold">
            Customers{" "}
            <span className="text-xs font-normal text-muted-foreground">this month</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-2 text-xl sm:text-2xl lg:text-3xl font-semibold">
            300
          </p>
          <p className="text-xs sm:text-sm">
            <span className="text-green-600 font-semibold">+15%</span> From last
            month
          </p>
          <span className="bg-muted absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-sm">
            <User size={20} />
          </span>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm mb-8">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-border">
            <h2 className="text-lg sm:text-xl font-semibold">Top Selling Products</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    Product
                  </th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    Price
                  </th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    Orders
                  </th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {topProducts.length > 0 &&
                  topProducts.map((product, id) => {
                    return (
                      <tr
                        key={id}
                        className="border-b border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 sm:py-4 px-3 sm:px-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <img
                              src={product.img}
                              alt={product.title}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover flex-shrink-0"
                            />
                            <div>
                              <p className="text-sm sm:text-base font-medium">
                                {product.title}
                              </p>
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
                          <p className="flex justify-center items-center text-green-600 text-xs sm:text-sm">
                            <Dot size={24} />
                            Available
                          </p>
                          <p className="text-muted-foreground mt-1 text-xs">
                            {product.remaining} stocks
                          </p>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Latest Orders Table */}
      <div className="bg-card border border-border rounded-lg shadow-sm">
        <div className="px-4 sm:px-6 py-4 border-b border-border">
          <h2 className="text-lg sm:text-xl font-semibold">Latest Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Order ID
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Product
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Order Date
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Price
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Payment
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                  Status
                </th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.length > 0 ? (
                latestOrders.map((product, id) => {
                  return (
                    <tr
                      key={id}
                      className="border-b border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                        {product.orderId}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                        {product.title}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm text-muted-foreground">
                        {product.orderDate}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium">
                        ${product.price}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                        {product.payment}
                      </td>
                      <td
                        className={`text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-medium ${
                          product.Status === "Completed"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      >
                        {product.Status}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 cursor-pointer">
                        <Ellipsis
                          size={20}
                          className="mx-auto hover:text-primary transition-colors"
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-10 text-center">
                    <h1 className="text-lg sm:text-xl font-bold text-muted-foreground">
                      No orders yet
                    </h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;