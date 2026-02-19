import ProductList from "./components/ProductList";
import "./App.css";
import React from "react";

function App() { 
    return (
        <div className="App">
            <h1 className="dashboard-title">Product Dashboard</h1>
            <ProductList />
        </div>
    );
}

export default App;