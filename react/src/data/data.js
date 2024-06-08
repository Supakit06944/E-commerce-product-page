import mainImage1 from "../../../images/image-product-1.jpg";
import mainImage2 from "../../../images/image-product-2.jpg";
import mainImage3 from "../../../images/image-product-3.jpg";
import mainImage4 from "../../../images/image-product-4.jpg";

import thumbNailImage1 from "../../../images/image-product-1-thumbnail.jpg";
import thumbNailImage2 from "../../../images/image-product-2-thumbnail.jpg"; // If the thumbnail is different, replace with the correct path
import thumbNailImage3 from "../../../images/image-product-3-thumbnail.jpg";
import thumbNailImage4 from "../../../images/image-product-4-thumbnail.jpg";

// Create the data array using the imported images
const data = [
  {
    id: 1,
    mainImage: mainImage1,
    thumbNail: thumbNailImage1,
  },
  {
    id: 2,
    mainImage: mainImage2,
    thumbNail: thumbNailImage2, // Assuming the thumbnail is image-product-2-thumbnail.jpg
  },
  {
    id: 3,
    mainImage: mainImage3,
    thumbNail: thumbNailImage3,
  },
  {
    id: 4,
    mainImage: mainImage4,
    thumbNail: thumbNailImage4,
  },
];

export default data;
