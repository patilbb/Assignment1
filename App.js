import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const Expenses=[
        {
        title:'Product 1',
        Price:10,
        Description:'First product'
        },
        {
        title:'Product 2',
        Price:20,
        Description:'Second product'
        },
        ]
    return (
        <div>
            <h1>My Demo Shop</h1>
            <div>
            <Product title={Expenses[0].title} Price={Expenses[0].Price} Description={Expenses[0].Description}></Product>
            <Product
            title={Expenses[1].title} Price={Expenses[1].Price} Description={Expenses[1].Description}
            ></Product>
            </div>
        </div>
    );
}