import { useState } from 'react';

import axios from "../../axios-orders";
import { updateObject } from '../../shared/utility'

import './ProductInput.css';

const ProductInput = props => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'footwear',
        name: '',
        imgUrl: 'item_1.1.jpg item_1.2.jpg',
        details: '',
        price: ''
    });

    const postEvent = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`/products/${formData.category}.json`, formData);
    }

    const changeData = (e) => {
        const updatedValue = {};
        updatedValue[e.target.dataset.name] = e.target.value;
        setFormData(updateObject(formData, updatedValue))
    }


    return (
        <form className="ProductInputForm" onSubmit={(e) => postEvent(e)}>
            <input onChange={changeData} data-name="title" type="text" placeholder="title" />
            <select onChange={changeData} data-name="category">
                <option value="footwear">Footwear</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="bestsellers">BestSellers</option>
            </select>
            <input onChange={changeData} data-name="name" type="text" placeholder="name" />
            <input onChange={changeData} data-name="imgUrl" type="text" placeholder="imgUrl" />
            <input onChange={changeData} data-name="details" type="text" placeholder="details" />
            <input onChange={changeData} data-name="price" type="text" placeholder="price" />

            <button>Submit</button>
        </form>
    )
}

export default ProductInput;