import React, {useState} from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams();
  const { data: products, loading, error } = useFetch(
    "products?category=" + category
  );

  function renderProduct({id, image, name, price}) {
    return (
      <div key={id} className="product">
        <Link to={`/${category}/${id}`}>
          <img src={`/images/${image}`} alt={name} />
          <h3>{name}</h3>
          <p>${price}</p>
        </Link>
      </div>
    );
  }

  const filteredProducts = size ? products.filter(product => product.skus.find(s => s.size === parseInt(size))) : products;

  if (error) throw error;
  if (loading) return <Spinner/>;
  if (products.length === 0) return <PageNotFound />;
  return (
    <>
        <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={event => setSize(event.target.value)}>
                <option value="">All sizes</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            { size ? <h2> Found {filteredProducts.length} items </h2> : ""}
        </section>
        <section id="products">{filteredProducts.map(renderProduct)}</section>
    </>
  );
}
