import Product from "./Product.jsx";
import "./ProductContainer.css"

//  flex-direction: row-reverse;


export default function productTab({direction}) {
  
  let styles = {flexDirection: (direction === "reverse") ? "row-reverse" : ""};

  return (
    <div className="ProductContainer" style={styles}>
      <Product
        productName="Logitech MX Master"
        features={["8000 DPI", "5 Programmable Buttons"]}
        oldPrice="12,495"
        currentPrice="8,999"
      />

      <Product
        productName="Apple Pencil (2nd Gen)"
        features={["Intuitive Touch Surface", "Designed for iPad Pro"]}
        oldPrice="11,900"
        currentPrice="9,199"
      />

      <Product
        productName="Zebronics"
        features={["Designed for iPad Pro", "Intuitive Touch Surface"]}
        oldPrice="1,599"
        currentPrice="899"
      />

      <Product
        productName="Petronics Toad"
        features={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
        oldPrice="599"
        currentPrice="278"
      />
    </div>
  );
}
