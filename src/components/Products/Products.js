import "./Products.css";
import products from "../../assets/staticData/products.json";
import Card from "../common/Card/Card";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Products = forwardRef((props, ref) => {
  return (
    <div className="products-section" ref={ref}>
      <div className="products__title">Our Products</div>
      <div className="products__container">
        {products.map((item) => (
          
          <Link key={item.id} to={`/products/${item.id}`} className="Links">
          <Card
          type="products"
          key={item.id}
          desc={item.desc}
          title={item.title}
          img={item.img}
          color={item.color}
        />
        </Link>
        ))}
      </div>
    </div>
  );
});

export default Products;
