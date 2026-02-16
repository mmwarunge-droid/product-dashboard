## Product Dashboard – React

A responsive product dashboard built with React + Vite that dynamically renders product cards and visually distinguishes between in-stock and out-of-stock items.

This project demonstrates component-based architecture, props handling, dynamic rendering with .map(), and conditional styling using CSS Modules.

Live Features

Dynamically renders products from an array

Conditional styling for in-stock vs out-of-stock items

Reusable ProductCard component

Iteration using .map()

Clean project structure

Built with Vite for fast development

🛠 Tech Stack

React

Vite

JavaScript (ES6+)

CSS Modules

JSX

## Project Structure

product-dashboard/
│
├── index.html
├── package.json
│
└── src/
├── main.jsx
├── App.jsx
├── App.css
├── index.css
│
└── components/
├── ProductList.jsx
├── ProductCard.jsx
└── ProductCard.module.css

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/product-dashboard.git

2️⃣ Navigate into the project folder
cd product-dashboard

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev

Open in browser:

http://localhost:5173/

Key Concepts Demonstrated
Component-Based Architecture

App → Parent container

ProductList → Handles iteration

ProductCard → Reusable UI component

## Dynamic Rendering

Products are rendered using:

products.map((product) => (
<ProductCard key={product.id} {...product} />
))

## Conditional Styling

Out-of-stock items:

Faded card

Red status text

Strikethrough product name

## Example Product Object

{
id: 1,
name: "Laptop",
price: 999.99,
inStock: true
}

## Learning Outcomes

This project reinforces:

Passing props between components

Using .map() for dynamic UI rendering

Managing UI state visually

Structuring scalable React applications

Using CSS Modules for scoped styling

## Future Improvements

Add "Add to Cart" functionality

Add stock filtering toggle

Add product sorting (price low → high)

Connect to backend API

Add search functionality

Add unit tests with Jest + React Testing Library

## Author

Mark Warunge
Tech & Fintech Enthusiast
