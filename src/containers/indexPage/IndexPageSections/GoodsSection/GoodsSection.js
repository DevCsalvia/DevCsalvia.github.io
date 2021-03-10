// My Css
import "./GoodsSection.css";

// My components
import Button from '../../../../components/UI/Button/Button';

const GoodsSection = props => (
    <section className="Goods-Section">
        <div className="Goods-Section__Content">
            <div className="Goods-Section__Content-First">
                <div className="Goods-Section__Content-Text">
                    <h3 className="Goods-Section__Content__Heading">The best Orthopedic Sneakers</h3>
                    <p className="Goods-Section__Content__Paragraph">
                        From Gucci to Tom Ford, luxury sneakers have become <br />
                        an essential element of every man’s casual wardrobe.
                    </p>
                    <p className="Goods-Section__Content__Paragraph">
                        Designer sneakers are now perfectly acceptable to <br /> wear from the gym to the office.
                        You can comfortably <br /> wear them with a pair of jeans for an elegant casual <br /> look or dress
                        them up with a suit for a business casual <br /> style.
                        Sneakers offer a level of style, versatility, and <br /> comfort that other shoes just can’t match.
                    </p>
                    <Button addClass="Button--Transparent" link="/products">Shop Now</Button>
                </div>
                <div className="Goods-Section__Content__Img"></div>
            </div>
            <div className="Goods-Section__Content-Second">
                <div className="Goods-Section__Content-Text">
                    <h3 className="Goods-Section__Content__Heading">High-Quality Fabrics</h3>
                    <p className="Goods-Section__Content__Paragraph">
                        From Gucci to Tom Ford, luxury sneakers have become <br />
                        an essential element of every man’s casual wardrobe.
                    </p>
                    <p className="Goods-Section__Content__Paragraph">
                        Designer sneakers are now perfectly acceptable to <br /> wear from the gym to the office.
                        You can comfortably <br /> wear them with a pair of jeans for an elegant casual <br /> look or dress
                        them up with a suit for a business casual <br /> style.
                        Sneakers offer a level of style, versatility, and <br /> comfort that other shoes just can’t match.
                    </p>
                    <Button addClass="Button--Transparent" link="/products">Shop Now</Button>
                </div>
                <div className="Goods-Section__Content__Img"></div>
            </div>
        </div>
    </section>
);

export default GoodsSection;