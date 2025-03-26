import { useGlobalContext } from "../hooks/useGlobalContex";

function Product({ d }) {
  const { dispatch, cart } = useGlobalContext();
  const { id, name, category, price, image } = d;
  const alreadyAdded = cart.find((d) => d.id == id);
  return (
    <div className="dessert-card">
      <picture>
        <source media="(min-width:998px)" srcSet={image.desktop} />
        <source media="(min-width:800px)" srcSet={image.tablet} />
        <source media="(min-width:400px)" srcSet={image.mobile} />
        <img
          className="dessert-card-image"
          style={{
            border: alreadyAdded ? "2px solid #c7380f" : "2px solid transparent",
          }}
          src={image.thumbnail}
          alt=""
        />
      </picture>
      <div className="buttons-wrapper">
        {!alreadyAdded && (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...d, amount: 1 },
              });
            }}
            className="btn add-to-card-btn"
          >
            <span className="add-to-card-btn-wrapper">
              <img src="../images/icon-add-to-cart.svg" alt="" />
              <span>Add to Card</span>
            </span>
          </button>
        )}
        {alreadyAdded && (
          <>
            <div className="add-to-card-btn-d-i add-to-card-btn-wrapper">
              <button
                className="button-icon decrement"
                onClick={() => {
                  if (alreadyAdded.amount == 1) {
                    dispatch({ type: "DELETE", payload: d.id });
                  } else {
                    dispatch({ type: "DECREMENT", payload: d.id });
                  }
                }}
              >
                <img src="./images/icon-decrement-quantity.svg" alt="" />
                <div className=""></div>
              </button>
              <p>{alreadyAdded.amount}</p>
              <button
                className="button-icon increment"
                onClick={() => dispatch({ type: "INCREMENT", payload: d.id })}
              >
                <img src="./images/icon-increment-quantity.svg" alt="" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="dessert-card-body">
        <p className="dessert-card-category">{category}</p>
        <h3 className="dessert-catd-name">{name}</h3>
        <p className="dessert-card-price">${price}</p>
      </div>
    </div>
  );
}

export default Product;
