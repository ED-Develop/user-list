import React, {useState} from 'react';
import style from './Header.module.css';
import Cart from "./Cart/Cart";
import {connect} from "react-redux";
import {decrementQuantity, deleteProduct, incrementQuantity, setQuantity} from "../../Redux/cart-reducer";
import {getProductInCart, getTotalPrice} from "../../Redux/cartSelector";


const Header = (props) => {
    let [isShowCart, setIsShowCart] = useState(false);
    const onCartOpen = () => {
        setIsShowCart(true);
    };
    return (
        <header className={style.header}>
            {isShowCart && <Cart productsInCart={props.productsInCart} incrementQuantity={props.incrementQuantity}
                                 decrementQuantity={props.decrementQuantity} setQuantity={props.setQuantity}
                                 setIsShowCart={setIsShowCart} deleteProduct={props.deleteProduct} totalPrice={props.totalPrice}/>}
            <div className={style.wrapper}>
                <div className={style.logo}>
                    Test
                </div>
                <div onClick={onCartOpen} className={style.navBar}>Cart</div>
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        productsInCart: getProductInCart(state),
        totalPrice: getTotalPrice(state)
    }
};

export default connect(mapStateToProps, {incrementQuantity, decrementQuantity,setQuantity,deleteProduct})(Header);