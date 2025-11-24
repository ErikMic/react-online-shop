import Navbar from "./components/navbar";
import Product from "./components/product";
import React, { Component } from "react";
import ShoppingBasket from "./components/shopping-basket";

class App extends Component {
    state = {
        basketItems: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.basketItems;
        let existingItem = currentItems.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.amount += amount;
            this.setState({ basketItems: currentItems });
            return;
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }
        this.setState({ basketItems: currentItems });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="main-container">
                    <div className="product-container">
                        <Product onAddToBasket={() => this.addItem(1, 'Tomaten', 2.99)} image="tomatoes" title="Tomaten" description="Frische und saftige Tomaten." />
                        <Product onAddToBasket={() => this.addItem(1, 'Gurken', 2.50)} image="cucumbers" title="Gurken" description="Knackige und kühle Gurken." />
                        <Product onAddToBasket={() => this.addItem(1, 'Paprika', 3.00)} image="peppers" title="Paprika" description="Bunte und süße Paprika." />
                        <Product onAddToBasket={() => this.addItem(1, 'Karotten', 1.80)} image="carrots" title="Karotten" description="Gesunde und knackige Karotten." />
                    </div>
                    <ShoppingBasket basketItems={this.state.basketItems} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;