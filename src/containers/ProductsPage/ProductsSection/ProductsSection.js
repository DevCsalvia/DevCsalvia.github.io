import Products from '../../../components/Products/Products';

const ProductsSection = props => {
    return (
        <section className="Products__Section">
            <h2 className="Products__Content__heading">{props.heading ? props.heading : props.match.params.category}</h2>
            <ul className="Products__List">
                <Products likeBtnClicked={props.likeBtnClickedHandler}
                    isLiked={props.isLiked}
                    linkUrl={props.linkUrl}
                    sectionCategory={props.sectionCategory ? props.sectionCategory : props.match.params.category} />
            </ul>
        </section>
    );
}

export default ProductsSection;