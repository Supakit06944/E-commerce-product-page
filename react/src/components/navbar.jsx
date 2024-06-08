/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../../../images/logo.svg";
import "../App.css";
import avatar from "../../../images/image-avatar.png";
import { PiShoppingCart } from "react-icons/pi";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import iconDelete from "../../../images/icon-delete.svg";
import data from "../data/data.js";
import {
  avatarIconStyle,
  cartBasketStyle,
  cartIconStyle,
  containerNavbarStyle,
  imageInCartBasketStyle,
  logoStyle,
  menuButtonStyle,
  menuItemStyle,
  menuTopicStyle,
  multiplyTextStyle,
  navbarLeftStlye,
  navbarRightStyle,
  textButtonGroupStyle,
  textCartBaskaetStyle,
  updateCartCountStyle,
} from "./navbarstyle.jsx";
import { cartPriceStyle } from "./navbarstyle.jsx";
import { buttonDeleteStyle } from "./navbarstyle.jsx";
import { checkOutButtonStyle } from "./navbarstyle.jsx";
import { emptyCartStyle } from "./navbarstyle.jsx";

function NavBar({ size, cart, price, handleDelete }) {
  return (
    <div className="container_navbar" css={containerNavbarStyle}>
      <div className="navbar_left" css={navbarLeftStlye}>
        <img src={logo} alt="logo" css={logoStyle} />
        <div className="textbuttongroup" css={textButtonGroupStyle}>
          <h5 className="textnavbar">Collections</h5>
          <h5 className="textnavbar">Men</h5>
          <h5 className="textnavbar">Women</h5>
          <h5 className="textnavbar">About</h5>
          <h5 className="textnavbar">Contact</h5>
        </div>
      </div>
      <div className="navbar_right" css={navbarRightStyle}>
        <PiShoppingCart css={cartIconStyle} />
        {size > 0 ? <span css={updateCartCountStyle}>{size}</span> : ""}
        <Menu>
          <MenuButton css={menuButtonStyle}>
            <img src={avatar} alt="profile" css={avatarIconStyle} />
          </MenuButton>
          <MenuList>
            <MenuItem css={menuItemStyle}>
              <h3 css={menuTopicStyle}>Cart</h3>
              {cart.amount > 0 ? (
                <div className="cart">
                  <div className="cart_detail" css={cartBasketStyle}>
                    <div className="cart_image">
                      <img
                        src={cart.image}
                        alt="productimage"
                        css={imageInCartBasketStyle}
                      />
                    </div>
                    <div className="cart_text">
                      <h4 css={textCartBaskaetStyle}>{cart.name}</h4>

                      <span css={multiplyTextStyle}>
                        ${price} x {cart.amount}
                      </span>

                      <span css={cartPriceStyle}>${cart.price}.00</span>
                    </div>

                    <button css={buttonDeleteStyle} onClick={handleDelete}>
                      <img src={iconDelete} alt="icon-delete" />
                    </button>
                  </div>
                  <button css={checkOutButtonStyle}>Checkout</button>
                </div>
              ) : (
                <h4 css={emptyCartStyle}>Your cart is empty</h4>
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
