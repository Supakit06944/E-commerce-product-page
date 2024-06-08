/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import product1 from "../../../images/image-product-1.jpg";
import { PiShoppingCart } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import {
  addButtonStyle,
  addToCartButtonStyle,
  amountOrdertextStyle,
  cartIconinAddToCartStyle,
  cartMainImageStyle,
  closeButtonStyle,
  closeIconStyle,
  contentContainerStyle,
  contentImageStyle,
  detailTextStyle,
  discountTextStyle,
  fullPriceStyle,
  lightBoxImageStyle,
  limitedTextStyle,
  minusButtonStyle,
  orderButtonGroupStyle,
  priceTextStyle,
  slideButtonGroupStyle,
  slideLeftButtonStyle,
  slideRightButtonStyle,
  sneakerTextStyle,
  thumbnailImageGroupPopUpStyle,
  thumbnailImagePopUpStyle,
  thumpnailGroupImageStyle,
  thumpnailImageStyle,
} from "./contentstyle";

function Content({
  addAmount,
  reduceAmount,
  getAmount,
  handleClick,
  products,
  setValue,
  slideIndex,
}) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container_content" css={contentContainerStyle}>
      <Modal
        onClose={handleClose}
        open={open}
        // aria-labelledby="parent-modal-title"
        // aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none", // Ensure no border on the Box
          boxShadow: "none", // Ensure no shadow on the Box
          outline: "none",
          background: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            width: "800px",
            background: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 40px ",
            position: "relative",
            border: "none", // Ensure no border on the Box
            boxShadow: "none", // Ensure no shadow on the Box
          }}
        >
          <button onClick={handleClose} css={closeButtonStyle}>
            <IoClose css={closeIconStyle} />
          </button>

          <img
            src={products[mainImageIndex].mainImage}
            alt="product1"
            css={lightBoxImageStyle}
          />
          <ul css={slideButtonGroupStyle}>
            <li>
              <button
                css={slideLeftButtonStyle}
                onClick={() => {
                  setMainImageIndex(
                    mainImageIndex === 0
                      ? products.length - 1
                      : mainImageIndex - 1
                  );
                }}
              >
                <FaChevronLeft />
              </button>
            </li>
            <li>
              <button
                css={slideRightButtonStyle}
                onClick={() => {
                  setMainImageIndex(
                    mainImageIndex === products.length - 1
                      ? 0
                      : mainImageIndex + 1
                  );
                }}
              >
                <FaChevronRight />
              </button>
            </li>
          </ul>
          <ul css={thumbnailImageGroupPopUpStyle}>
            {products.map((item, index) => (
              <li key={item.id}>
                <img
                  src={item.thumbNail}
                  alt={`Thumbnail for product ${item.id}`}
                  css={css`
                    ${thumbnailImagePopUpStyle};
                    border-color: ${mainImageIndex === index
                      ? "#ff7d1b"
                      : "transparent"};
                  `}
                  onClick={() => {
                    setValue(index);
                    setMainImageIndex(index);
                    setOpen(true);
                  }}
                />
              </li>
            ))}
          </ul>
        </Box>
      </Modal>
      <div className="content_imageslide" css={contentImageStyle}>
        {products.map((item, index) => {
          return (
            <div
              key={index}
              css={css`
                /* position: ${slideIndex === index ? "relative" : "hidden"}; */
                display: ${slideIndex === index ? "block" : "none"};
              `}
            >
              <img
                src={item.mainImage}
                alt="product1"
                css={cartMainImageStyle}
              />
            </div>
          );
        })}

        <ul css={thumpnailGroupImageStyle}>
          {products.map((item, index) => (
            <li key={item.id}>
              <img
                src={item.thumbNail}
                alt={`Thumbnail for product ${item.id}`}
                css={thumpnailImageStyle}
                onClick={() => {
                  setValue(index);
                  setMainImageIndex(index);
                  setOpen(true);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="content_orderdetail">
        <div className="description">
          <div className="descriptiont-text">
            <h5 css={sneakerTextStyle}>SNEAKER COMPANY</h5>
            <h1 css={limitedTextStyle}>
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <h5 css={detailTextStyle}>
              These low-profile sneakers are your perfect casual wear <br />
              companion. Featuring a durable rubber outer sole, they’ll <br />
              withstand everything the weather can offer.
            </h5>
            <h1 css={priceTextStyle}>
              $125.00 <span css={discountTextStyle}>50%</span>
            </h1>
            <h4 css={fullPriceStyle}>$250.00</h4>
          </div>

          <div className="allorder_button" css={orderButtonGroupStyle}>
            <div
              className="amountbutton"
              css={css`
                display: flex;
              `}
            >
              <button css={minusButtonStyle} onClick={reduceAmount}>
                -
              </button>
              <span css={amountOrdertextStyle}>{getAmount}</span>
              <button css={addButtonStyle} onClick={addAmount}>
                +
              </button>
            </div>

            <button css={addToCartButtonStyle} onClick={handleClick}>
              <PiShoppingCart css={cartIconinAddToCartStyle} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
