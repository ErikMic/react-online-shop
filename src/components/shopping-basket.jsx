import React, { Component } from 'react';

class ShoppingBasket extends Component {
    state = {}
    render() {
        return (
            <div className="shopping-basket">
                <h2>Warenkorb</h2>
                {this.props.basketItems.map(item => <div key={item.name}>{item.amount} x {item.name} - {item.price.toFixed(2)}€</div>)}
            </div>
        );
    }
}

export default ShoppingBasket;