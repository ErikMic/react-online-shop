import Navbar from "./components/navbar";
import Product from "./components/product";
import React, { Component } from "react";

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div className="product-container">
                    <Product/>
                    <Product/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;