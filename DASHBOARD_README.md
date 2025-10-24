# Responsive Dashboard Overview Component

This implementation provides a fully responsive dashboard with the following features:

## Components Created

### 1. Overview Component (`/src/components/Overview.jsx`)
- **Responsive Design**: Mobile-first approach with breakpoints for sm, md, lg screens
- **Statistics Cards**: Three key metrics cards with hover effects
- **Data Tables**: Responsive tables for top products and latest orders
- **Mobile Optimization**: Horizontal scrolling for tables on smaller screens

### 2. Dashboard Layout (`/src/layouts/dashboard-layout.jsx`)
- **Sidebar Navigation**: Collapsible sidebar with mobile hamburger menu
- **Router Integration**: Uses React Router's Outlet for nested routing
- **Responsive Sidebar**: Hidden on mobile, visible on desktop
- **Active State Management**: Highlights current page in navigation

### 3. Dashboard Pages
- **Overview Page** (`/src/pages/dashboard.jsx`): Main dashboard with Overview component
- **Products Page** (`/src/pages/dashboard-products.jsx`): Products management placeholder
- **Customers Page** (`/src/pages/dashboard-customers.jsx`): Customer management placeholder
- **Settings Page** (`/src/pages/dashboard-settings.jsx`): Settings configuration placeholder

## Responsive Features

### Mobile (sm: 640px and below)
- Single column layout for statistics cards
- Horizontal scrolling for tables
- Collapsible sidebar with overlay
- Smaller text sizes and padding

### Tablet (md: 768px - lg: 1024px)
- Two-column layout for statistics cards
- Improved table spacing
- Sidebar remains collapsible

### Desktop (lg: 1024px and above)
- Three-column layout for statistics cards
- Fixed sidebar navigation
- Full table visibility without horizontal scroll
- Larger text and spacing

## CSS Classes Added

- `.txt-secondary2`: Blue color for secondary text
- `.txt-white`: White text color
- `.card-hover`: Hover effects for cards
- `.table-responsive`: Responsive table styling

## Usage

1. Navigate to `/dashboard` to see the main overview
2. Use the sidebar navigation to switch between different sections
3. The layout automatically adapts to different screen sizes
4. Tables scroll horizontally on mobile devices

## Dependencies

- React Router DOM for navigation
- Lucide React for icons
- Tailwind CSS for styling
- React Redux (mock implementation)

## File Structure

```
src/
├── components/
│   └── Overview.jsx
├── layouts/
│   └── dashboard-layout.jsx
├── pages/
│   ├── dashboard.jsx
│   ├── dashboard-products.jsx
│   ├── dashboard-customers.jsx
│   └── dashboard-settings.jsx
├── assets/
│   ├── profile.png
│   ├── product1.png
│   ├── product2.png
│   └── product3.png
├── utils/
│   └── Repeated.js
└── store/
    └── store.js
```