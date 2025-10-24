import { Clipboard, Dot, Ellipsis, Percent, User } from "lucide-react";
import { useState } from "react";

// Mock data - replace with actual imports when available
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: { secure_url: null }
};

// Mock images - using placeholder service for demo
const profileImg = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face";
const productImg = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=48&h=48&fit=crop";
const productImg2 = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=48&h=48&fit=crop";
const productImg3 = "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=48&h=48&fit=crop";

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
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
              Welcome Back,{" "}
              <span className="font-bold text-blue-600">
                {user?.name}!
              </span>
            </h1>
            <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600">
              Here's Your Current Sales Overview
            </p>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 bg-white p-3 lg:p-4 rounded-lg shadow-sm border">
            <div className="h-10 w-10 lg:h-12 lg:w-12 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={user?.avatar?.secure_url || profileImg}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm lg:text-base text-gray-900 truncate">
                {user?.name}
              </p>
              <p className="text-xs lg:text-sm text-gray-500 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* Total Orders Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 lg:p-8 relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold">Total Orders</h3>
                <p className="text-xs lg:text-sm text-blue-100 mt-1">this month</p>
              </div>
              <div className="bg-white bg-opacity-20 p-2 lg:p-3 rounded-lg">
                <Clipboard size={20} className="lg:w-6 lg:h-6" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl xl:text-4xl font-bold">1,050</p>
              <p className="text-xs lg:text-sm text-blue-100">
                <span className="text-green-300 font-semibold">+10%</span> From last month
              </p>
            </div>
          </div>

          {/* Total Sales Card */}
          <div className="bg-white p-6 lg:p-8 relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Total Sales</h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-1">this month</p>
              </div>
              <div className="bg-gray-100 p-2 lg:p-3 rounded-lg">
                <Percent size={20} className="lg:w-6 lg:h-6 text-gray-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">$56,093</p>
              <p className="text-xs lg:text-sm text-gray-600">
                <span className="text-green-600 font-semibold">+5%</span> From last month
              </p>
            </div>
          </div>

          {/* Customers Card */}
          <div className="bg-white p-6 lg:p-8 relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border md:col-span-2 xl:col-span-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Customers</h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-1">this month</p>
              </div>
              <div className="bg-gray-100 p-2 lg:p-3 rounded-lg">
                <User size={20} className="lg:w-6 lg:h-6 text-gray-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">300</p>
              <p className="text-xs lg:text-sm text-gray-600">
                <span className="text-green-600 font-semibold">+15%</span> From last month
              </p>
            </div>
          </div>
        </div>

        {/* Top Selling Products Section */}
        <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Top Selling Products</h2>
          </div>
          
          {/* Mobile Card View */}
          <div className="block lg:hidden">
            <div className="divide-y divide-gray-200">
              {topProducts.map((product) => (
                <div key={product.id} className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-gray-500">Price</p>
                      <p className="font-semibold text-gray-900">${product.price}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Orders</p>
                      <p className="font-semibold text-gray-900">{product.orderCount}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Status</p>
                      <div className="flex items-center justify-center text-green-600">
                        <Dot size={16} />
                        <span className="text-xs">Available</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{product.remaining} stocks</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Product</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Price</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Orders</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{product.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{product.sales} sales</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 font-semibold text-gray-900">
                      ${product.price}
                    </td>
                    <td className="text-center py-4 px-6 font-semibold text-gray-900">
                      {product.orderCount}
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center text-green-600 mb-1">
                          <Dot size={20} />
                          <span className="text-sm font-medium">Available</span>
                        </div>
                        <p className="text-xs text-gray-500">{product.remaining} stocks</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Orders Section */}
        <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Latest Orders</h2>
          </div>

          {latestOrders.length > 0 ? (
            <>
              {/* Mobile Card View */}
              <div className="block lg:hidden">
                <div className="divide-y divide-gray-200">
                  {latestOrders.map((order, index) => (
                    <div key={index} className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900">{order.orderId}</p>
                          <p className="text-sm text-gray-600 mt-1">{order.title}</p>
                        </div>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Ellipsis size={16} className="text-gray-400" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p className="font-medium text-gray-900">{order.orderDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Price</p>
                          <p className="font-semibold text-gray-900">${order.price}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Payment</p>
                          <p className="font-medium text-gray-900">{order.payment}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            order.Status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {order.Status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Order ID</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Product</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Order Date</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Price</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Payment</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-900">Status</th>
                      <th className="w-12 py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {latestOrders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900">{order.orderId}</td>
                        <td className="text-center py-4 px-6 text-gray-900">{order.title}</td>
                        <td className="text-center py-4 px-6 text-sm text-gray-600">{order.orderDate}</td>
                        <td className="text-center py-4 px-6 font-semibold text-gray-900">${order.price}</td>
                        <td className="text-center py-4 px-6 text-gray-900">{order.payment}</td>
                        <td className="text-center py-4 px-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            order.Status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {order.Status}
                          </span>
                        </td>
                        <td className="text-center py-4 px-6">
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <Ellipsis size={16} className="text-gray-400 hover:text-gray-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="py-16 text-center">
              <div className="text-gray-400 mb-4">
                <Clipboard size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-500">Orders will appear here once customers start purchasing.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;