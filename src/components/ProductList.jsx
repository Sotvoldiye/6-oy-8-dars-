import { memo } from "react";
import Product from "./Product";
import YourCard from "./YourCard";
function ProductList({ desserts, isPending }) {
  return (
    <div>
      <div className="desserts-title">Dessert</div>
      <div className="products-container">
      {desserts &&
        desserts.map((d) => {
          return( <>
          <Product d={d} key={d.id} />
          {/* <YourCard   d={d} key={d.id}/> */}
         </>)
          ;
        })}
    </div>
</div>
  );
}
export default memo( ProductList);
