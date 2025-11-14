import Navbar from "./components/navbar";
import Product from "./components/product";
import React, { Component } from "react";

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="product-container">
                    <Product image="tomatoes" title="Tomaten" description="Frische und saftige Tomaten." />
                    <Product image="cucumbers" title="Gurken" description="Knackige und kühle Gurken." />
                </div>
            </React.Fragment>
        );
    }
}

export default App;