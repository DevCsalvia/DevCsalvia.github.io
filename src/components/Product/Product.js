import Aux from '../../hoc/Auxil/Auxil';

// My icons
import { ReactComponent as HeartSvg } from '../../assets/SVG-Icons/heart-o.svg';

import './Product.css';

const Product = (props) => (
    <Aux>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img">
                <img src={`./images/ProductsPage/img/${props.imgUrl}`} alt="Product Img" />
            </div>
            <h6 className="Product__grid__item__name">{props.name}</h6>
            <span className="Product__grid__item__price">{props.price}rub</span>
        </li>
        {/* <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-2"></div>
            <h6 className="Product__grid__item__title">RED WILD TRAINER (MEN'S)</h6>
            <span className="Product__grid__item__price">5199р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-3"></div>
            <h6 className="Product__grid__item__title">YELLOW WILD TRAINER (MEN'S)</h6>
            <span className="Product__grid__item__price">3999р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-4"></div>
            <h6 className="Product__grid__item__title">HIGH-TOP WHITE WILD TRAINER (MEN'S)</h6>
            <span className="Product__grid__item__price">3499р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-5"></div>
            <h6 className="Product__grid__item__title">SILVER WILD TRAINER (MEN'S)</h6>
            <span className="Product__grid__item__price">5599р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-6"></div>
            <h6 className="Product__grid__item__title">CASUAL WILD TRAINER (MEN'S)</h6>
            <span className="Product__grid__item__price">4799р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-7"></div>
            <h6 className="Product__grid__item__title">BLACK WILD T-SHIRT (WOMEN'S)</h6>
            <span className="Product__grid__item__price">1499р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-8"></div>
            <h6 className="Product__grid__item__title">WHITE WILD T-SHIRT (MEN'S)</h6>
            <span className="Product__grid__item__price">1899р</span>
        </li>
        <li className="Product__grid__item">
            <button>
                <HeartSvg />
            </button>
            <div className="Product__grid__item__img Product__grid__item__img-9"></div>
            <h6 className="Product__grid__item__title">WHITE WILD T-SHIRT (WOMEN'S)</h6>
            <span className="Product__grid__item__price">1699р</span>
        </li> */}
    </Aux>
);

export default Product;