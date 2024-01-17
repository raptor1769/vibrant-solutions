import "./Products.css";
import products from "../../assets/staticData/products.json";
import Card from "../common/Card/Card";
import { forwardRef } from "react";

const Products = forwardRef((props, ref) => {
  return (
    <div className="products-section" ref={ref}>
      <div className="products__title">Our Products</div>
      <div className="products__container">
        {products.map((item) => (
          <Card
            type="products"
            key={item.id}
            desc={item.desc}
            title={item.title}
            img={item.img}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
});

export default Products;
