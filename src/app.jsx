import Navbar from "./components/navbar";
import Product from "./components/product";
import React, { Component } from "react";
import ShoppingBasket from "./components/shopping-basket";

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="main-container">
                    <div className="product-container">
                        <Product image="tomatoes" title="Tomaten" description="Frische und saftige Tomaten." />
                        <Product image="cucumbers" title="Gurken" description="Knackige und kühle Gurken." />
                    </div>
                    <ShoppingBasket />
                </div>
            </React.Fragment>
        );
    }
}

export default App;