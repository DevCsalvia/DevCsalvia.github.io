import './ProductDetails.css';

import Aux from '../../../hoc/Auxil/Auxil';
import Stars from '../../UI/Stars/Stars';
import Button from '../../UI/Button/Button';

import { ReactComponent as HeartSvg } from '../../../assets/SVG-Icons/heart-o.svg';

const ProductDetails = (props) => {
    return (
        <Aux>
            <div className="Product-Details-Wrapper">
                <div className="Products-Details__Content">
                    <div className="Products-Details__Content__imgs-block">
                        <div className="Products-Details__Content__img Products-Details__Content__img--1"></div>
                        <div className="Products-Details__Content__img Products-Details__Content__img--2"></div>
                    </div>
                    <div className="Products-Details__Content__product-props">
                        <div className="Products-Details__Content__product-title">SILVER WILD TRAINER (MEN'S)</div>
                        <div className="Products-Details__Content__product-price">5499rub</div>
                        <div className="Products-Details__Content__product-stars">
                            <Stars amount='5' /> <span>4.9</span>
                        </div>
                        <div className="Products-Details__Content__product-size">
                            <span className="Products-Details__Content__product-status">SELECT A SIZE</span>
                            <div className="Products-Details__Content__product-size-grid">
                                <button><span>32</span></button>
                                <button><span>33</span></button>
                                <button><span>34</span></button>
                                <button><span>35</span></button>
                                <button><span>36</span></button>
                                <button><span>37</span></button>
                                <button><span>38</span></button>
                                <button><span>39</span></button>
                                <button><span>40</span></button>
                                <button><span>41</span></button>
                                <button><span>42</span></button>
                                <button><span>43</span></button>
                                <button><span>44</span></button>
                                <button><span>45</span></button>
                                <button><span>46</span></button>
                                <button><span>47</span></button>
                                <button><span>48</span></button>
                                <button><span>49</span></button>
                            </div>
                        </div>
                        <div className="Products-Details__Content__product-props__Button-Wrapper">
                            <Button link='#' addClass="Products-Details__Content__product-props__Button">ADD TO BAG</Button>
                            <div className="Products-Details__Content__product-props__Heart-Btn"><HeartSvg /></div>
                        </div>
                    </div>
                </div>
                <div className="Products-Details__Content__Reviews">
                    <div className="Products-Details__Content__Reviews__Text-block">
                        <span>BASED ON 5843 REVIEWS</span>
                        <div>
                            <Stars amount='5' /> <span>4.8</span>
                        </div>
                    </div>

                    <Button link='#' addClass="Products-Details__Content__Reviews__Button">WRITE A COMMENT</Button>
                </div>
            </div>
        </Aux>
    );
};

export default ProductDetails;