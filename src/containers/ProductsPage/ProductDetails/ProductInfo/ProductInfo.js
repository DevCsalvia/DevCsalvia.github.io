import classes from './ProductInfo.module.css';

// UI components
import Stars from '../../../../components/UI/Stars/Stars';
import Accrodion from '../../../../components/UI/Accordion/Accordion';

import ProductInfoForm from './ProductInfoForm/ProductInfoForm';


const ProductInfo = props => {
    return (<div className={classes.ProductDetails__Content__PropsWrapper}>
        <div className={classes.ProductDetails__Content__Product_Title}>{props.productData.title}</div>
        <div className={classes.ProductDetails__Content__Product_Name}>{props.productData.name}</div>
        <div className={classes.ProductDetails__Content__Product_Price}>{props.productData.price} Rub</div>
        <div className={classes.ProductDetails__Content__Product__Stars}>
            <Stars amount='5' />&nbsp;<span>4.9</span>
        </div>
        <ProductInfoForm productData={props.productData} />
        <Accrodion detailsContent={props.productData.details} />
    </div>);
};

export default ProductInfo;