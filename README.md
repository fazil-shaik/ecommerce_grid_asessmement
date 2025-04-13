
# E-commerce Product Catalog

A responsive e-commerce product catalog built with React, Vite, and Tailwind CSS. This project features a product listing page with filtering and sorting capabilities, as well as detailed product pages.


## Features

- Responsive product grid/listing page
- Category filters and sorting functionality
- Detailed product pages with images, specifications, and related products
- Mobile-responsive design
- Dark mode support
- Reusable components (ProductCard, PriceTag, RatingStars, FilterSidebar)

## Tech Stack

This project is built with:

- **Vite** - Fast, modern frontend build tool
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components

## Project Structure

```
src/
├── components/
│   ├── client/
│   │   └── Product/
│   │       ├── FilterSidebar.jsx     # Sidebar with category filters
│   │       ├── ProductCard.jsx       # Reusable product card component
│   │       ├── ProductDetailPage.jsx # Product detail page
│   │       └── ProductListPage.jsx   # Main product listing page
│   ├── ui/                           # shadcn UI components
│   ├── price-tag.tsx                 # Price display component
│   └── rating-stars.tsx              # Star rating component
├── lib/
│   ├── data.ts                       # Mock product data
│   └── utils.ts                      # Utility functions
├── pages/
│   └── ProductDetail.tsx             # Product detail page content
└── App.tsx                           # Main application component
```


Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Edit a file directly in GitHub

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

### Use GitHub Codespaces

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.


## Future Enhancements

- Add user authentication
- Implement shopping cart functionality
- Add product search capability
- Add product reviews section
- Connect to a backend API for real product data

## License

MIT
