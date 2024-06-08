/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const contentContainerStyle = css`
  width: 1440px;
  margin: 55px 0px;
  display: flex;
  gap: 100px;
`;

export const closeButtonStyle = css`
  cursor: pointer;
  background: none; /* Remove default background */
  border: none; /* Remove default border */
  margin-left: 480px;
  margin-bottom: 5px;
`;

export const closeIconStyle = css`
  width: 30px;
  height: 30px;
  color: white;
  margin-top: 5px;
  :hover {
    color: #ff7d1b;
  }
`;

export const lightBoxImageStyle = css`
  width: 500px;
  height: 450px;
  border-radius: 20px;
`;

export const slideButtonGroupStyle = css`
  list-style-type: none;
  padding: 0;
`;

export const slideLeftButtonStyle = css`
  background-color: white;
  padding: 19px 19px;
  border-radius: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 165px;
  top: 245px;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  :hover {
    color: #ff7d1b;
  }
`;
export const slideRightButtonStyle = css`
  background-color: white;
  padding: 19px 19px;
  border-radius: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 165px;
  top: 245px;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  :hover {
    color: #ff7d1b;
  }
`;
export const thumbnailImageGroupPopUpStyle = css`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 25px;
`;

export const thumbnailImagePopUpStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.5s;
  border: 3px solid transparent;
  :hover {
    border-color: #ff7d1b;
  }
`;

export const contentImageStyle = css`
  padding-left: 280px;
  position: relative;
`;
export const cartMainImageStyle = css`
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;
export const thumpnailGroupImageStyle = css`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 22px;
`;
export const thumpnailImageStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 3px solid transparent;
  cursor: pointer;
  transition: border-color 0.5s;
  :hover {
    border: 3px solid #ff7d1b;
  }
`;
export const sneakerTextStyle = css`
  margin-top: 55px;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
`;
export const limitedTextStyle = css`
  font-weight: 700;
  font-size: 36px;
`;
export const detailTextStyle = css`
  font-weight: 400;
  color: hsl(219, 9%, 45%);
`;
export const priceTextStyle = css`
  margin: 0;
  padding: 0;
`;
export const discountTextStyle = css`
  font-size: 13px;
  background-color: black;
  color: white;
  padding: 3px 6px;
  border-radius: 5px;
  font-weight: 500;
`;
export const fullPriceStyle = css`
  font-weight: 700;
  color: hsl(219, 9%, 45%);
  text-decoration: line-through;
  margin-top: 10px;
`;
export const orderButtonGroupStyle = css`
  display: flex;
  margin-top: 40px;
  gap: 15px;
  align-items: center;
`;
export const minusButtonStyle = css`
  padding: 0px 10px;
  height: 45px;
  background-color: rgb(244, 248, 251);
  color: orange;
  font-size: 16px;
  font-weight: 900;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  border: none;
`;
export const amountOrdertextStyle = css`
  padding: 13px 25px 7px 25px;
  background-color: rgb(244, 248, 251);
  font-size: 16px;
  font-weight: 700;
  width: 20px;
  height: 25px;
  text-align: center;
`;
export const addButtonStyle = css`
  padding: 0px 10px;
  background-color: rgb(244, 248, 251);
  color: orange;
  font-size: 16px;
  font-weight: 900;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  border: none;
  height: 45px;
`;
export const addToCartButtonStyle = css`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  font-weight: 700;
  color: black;
  padding: 0 65px 0 50px;
  background-color: #ff7d1b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #ffa561;
  }
`;
export const cartIconinAddToCartStyle = css`
  width: 15px;
  height: 15px;
  color: black;
  stroke-width: 7;
`;
