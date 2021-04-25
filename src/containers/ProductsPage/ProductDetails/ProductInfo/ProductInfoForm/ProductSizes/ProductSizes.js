import classes from './ProductSizes.module.css';

const ProductSizes = props => {

    // labelClickedHandler
    const labelClickedHandler = (e) => {
        const elClasses = e.target.parentNode.classList;
        const className = classes.ProductDetails__Content__ProductSizesGrid__LabelChecked;
        const prevElement = document.querySelector(`.${className}`);

        // If element is not checked then add class and update Product Size
        if (!elClasses.contains(className)) {
            elClasses.add(className);
            props.setProductSize(e.target.value);
        }

        // If prevElement is not equal to the current element that was clicked, prevElement remove class and uncheck
        if (prevElement && prevElement !== e.target.parentNode) {
            prevElement.classList.remove(`${className}`);
            prevElement.firstChild.checked = false;
        }
    };

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    // Sizes Markup
    const sizesMarkup = [];
    for (let i = 34; i < 49; i++) {
        sizesMarkup.push(<label className={classes.ProductDetails__Content__ProductSizesGrid__Label} key={i}>
            <input type="checkbox" value={i} onChange={(e) => labelClickedHandler(e)} />{i}
        </label>);
    };

    return (
        <div className={classes.ProductDetails__Content__ProductSize}>
            <span className={classes.ProductDetails__Content__Product_Status}>SELECT A SIZE</span>
            <div className={classes.ProductDetails__Content__ProductSizesGrid}>
                {sizesMarkup}
            </div>
        </div>
    );
};

export default ProductSizes;