const DashboardCustomers = () => {
  return (
    <div className="my-4 sm:my-6 lg:my-8 max-w-[90%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="header flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6 sm:mb-8">
        <div className="left-side">
          <h1 className="text-2xl sm:text-3xl font-medium">
            Customers Management
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700">
            View and manage your customer base
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>
        <p className="text-gray-600">Customer management functionality will be implemented here.</p>
      </div>
    </div>
  );
};

export default DashboardCustomers;