import ProductsList from './ProductsList/ProductsList';

import classes from './ProductsSection.module.css';

const ProductsSection = props => {
    return (
        <section className={classes.Products__Section}>
            <h2 className={classes.Products__Content__heading}>{props.heading ? props.heading : props.match.params.category}</h2>
            <ProductsList
                sectionCategory={props.sectionCategory ? props.sectionCategory : props.match.params.category} />
        </section>
    );
}

export default ProductsSection;