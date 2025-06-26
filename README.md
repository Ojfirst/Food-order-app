# Food Order App

A simple React application for browsing meals and managing a shopping cart. Users can add meals to their cart, adjust quantities, and view the total price before checkout.

## Features

- Browse a list of available meals
- Add meals to the shopping cart
- Increase or decrease meal quantities in the cart
- View total price of items in the cart
- Remove items from the cart

## Technologies Used

- React (with Hooks)
- Context API for state management
- JavaScript (ES6+)
- CSS (or your preferred styling solution)

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/foodorderapp.git
   cd foodorderapp
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
src/
  components/      # Reusable UI components
  store/           # Context and state management (CartProvider, Cart-context)
  App.js           # Main application component
  index.js         # Entry point
```

## Customization

- Add more meals by editing the meals data source.
- Style the app by modifying or adding CSS files.

## License

This project is licensed under the MIT License.

---