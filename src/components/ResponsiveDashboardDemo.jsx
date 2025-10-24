import Overview from "./Overview";

/**
 * ResponsiveDashboardDemo - A demonstration component showing the responsive Overview dashboard
 * 
 * Responsive Breakpoints:
 * - Mobile (sm): 640px and below
 *   - Single column layout for statistics cards
 *   - Card-based view for tables (stacked layout)
 *   - Compact header with smaller text sizes
 *   - Mobile-optimized navigation
 * 
 * - Tablet (md): 641px - 1023px
 *   - Two-column grid for statistics cards
 *   - Card view for tables on smaller tablets
 *   - Responsive padding and spacing
 * 
 * - Desktop (lg): 1024px - 1279px
 *   - Three-column grid for statistics cards
 *   - Full table view with proper columns
 *   - Sidebar navigation
 *   - Larger text and spacing
 * 
 * - Large Desktop (xl): 1280px and above
 *   - Optimized spacing and typography
 *   - Full desktop experience
 * 
 * Key Responsive Features:
 * 1. Adaptive Grid Layouts: Statistics cards adapt from 1 column (mobile) to 3 columns (desktop)
 * 2. Conditional Table Views: Tables switch between card view (mobile) and table view (desktop)
 * 3. Responsive Typography: Text sizes scale appropriately across devices
 * 4. Flexible Navigation: Sidebar collapses to hamburger menu on mobile
 * 5. Touch-Friendly Interactions: Larger touch targets on mobile devices
 * 6. Optimized Spacing: Padding and margins adjust based on screen size
 */

const ResponsiveDashboardDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header */}
      <div className="bg-white border-b border-gray-200 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Responsive Dashboard Overview
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            This dashboard automatically adapts to different screen sizes for optimal user experience
          </p>
          
          {/* Responsive Indicators */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-block sm:hidden px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
              Mobile View (&lt; 640px)
            </span>
            <span className="hidden sm:inline-block md:hidden px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              Small Tablet (640px - 767px)
            </span>
            <span className="hidden md:inline-block lg:hidden px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              Tablet (768px - 1023px)
            </span>
            <span className="hidden lg:inline-block xl:hidden px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Desktop (1024px - 1279px)
            </span>
            <span className="hidden xl:inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
              Large Desktop (≥ 1280px)
            </span>
          </div>
        </div>
      </div>

      {/* Overview Component */}
      <Overview />
      
      {/* Responsive Features Info */}
      <div className="bg-white border-t border-gray-200 p-4 lg:p-6 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            Responsive Features Implemented
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">📱 Mobile First</h3>
              <p className="text-sm text-gray-600">
                Designed mobile-first with progressive enhancement for larger screens
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">🔄 Adaptive Layouts</h3>
              <p className="text-sm text-gray-600">
                Grid systems and components adapt fluidly across breakpoints
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">📊 Smart Tables</h3>
              <p className="text-sm text-gray-600">
                Tables transform into card layouts on mobile for better readability
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Touch Optimized</h3>
              <p className="text-sm text-gray-600">
                Interactive elements sized appropriately for touch interfaces
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">🎨 Consistent Design</h3>
              <p className="text-sm text-gray-600">
                Maintains visual hierarchy and branding across all screen sizes
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">⚡ Performance</h3>
              <p className="text-sm text-gray-600">
                Optimized rendering and efficient CSS for smooth interactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDashboardDemo;