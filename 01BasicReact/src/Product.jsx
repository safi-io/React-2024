import "./Product.css";

export default function Product({
  productName,
  features,
  oldPrice,
  currentPrice,
}) {
  let lists = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="main-container">
      <h4>{productName}</h4>
      <p>{lists}</p>
      
      <p className="price">
        <span className="oldPrice">{oldPrice}</span>
        &nbsp;&nbsp;
        <span className="currentPrice">{currentPrice}</span>
      </p>
      
    </div>
  );
}
