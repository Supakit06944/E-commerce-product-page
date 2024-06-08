/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerNavbarStyle = css`
  width: 1440px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 120px;
  position: relative;
`;
export const navbarLeftStlye = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const logoStyle = css`
  width: 100px;
  height: 15px;
`;
export const textButtonGroupStyle = css`
  display: flex;
  padding-left: 40px;
  gap: 30px;
`;
export const navbarRightStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
`;
export const cartIconStyle = css`
  width: 20px;
  height: 20px;
  color: gray;
  cursor: pointer;
  position: relative;
  :hover {
    color: black;
  }
`;
export const updateCartCountStyle = css`
  position: absolute;
  top: 35px;
  right: 298px;
  width: 12px;
  height: 6px;
  padding: 4px;
  color: white;
  border-radius: 20px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7d1b;
  font-weight: 700;
`;
export const menuButtonStyle = css`
  border-radius: 100%;
  width: 46px;
  height: 45px;
  padding: 0;
  border: 3px white solid;
  background-color: white;
  cursor: pointer;
  :hover {
    border: 3px solid orange;
  }
`;
export const avatarIconStyle = css`
  width: 40px;
  height: 40px;
  padding-top: 3.5px;
`;
export const menuItemStyle = css`
  width: 330px;
  height: 205px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 10px;
`;
export const menuTopicStyle = css`
  margin: 0;
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #cfd8dc6d;
  box-sizing: border-box;
`;
export const cartBasketStyle = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const imageInCartBasketStyle = css`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
`;
export const textCartBaskaetStyle = css`
  font-family: "Kumbh Sans", sans-serif;
  color: hsl(215, 7.6%, 44.1%);
  font-weight: 400;
  margin-bottom: 5px;
`;
export const multiplyTextStyle = css`
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
  margin-right: 5px;
  color: hsl(215, 7.6%, 44.1%);
`;
export const cartPriceStyle = css`
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
  font-weight: 700;
`;
export const buttonDeleteStyle = css`
  background-color: white;
  border: none;
  margin-top: 15px;
  cursor: pointer;
`;
export const checkOutButtonStyle = css`
  width: 290px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  font-weight: 700;
  color: black;
  padding: 0 65px 0 50px;
  background-color: #ff7d1b;
  border: none;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  :hover {
    background-color: #ffa561;
  }
`;
export const emptyCartStyle = css`
  font-family: "Kumbh Sans", sans-serif;
  color: hsl(215, 7.6%, 44.1%);
  font-weight: 700;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
