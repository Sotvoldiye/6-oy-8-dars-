import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContex";

export default function Modal({ modal, setModal }) {
  const { dispatch, cart } = useGlobalContext();
  console.log("Modal");
  return (
    <div className="modal">
      <div>
        <img src="./images/icon-order-confirmed.svg" alt="" />
        <p className="modalTitle">Order Confirmed</p>
        <p className="modalSubTitle">We hope you enjoy your food!</p>
      </div>
      <div className="modalList">
        {cart.map((p, index) => (
 <>
          <div key={index} className="modalDecription">
           
            <div className="modal_image_text">
              <img className="modal-img" src={p.image.thumbnail } alt="" />
              <div className="modalDescriptionText">
                <p className="textTitle">Classic Tiramisu</p>
                <div className="textText">
                  <p className="text-length">{p.name}x</p>
                  <div className="text-price">@ ${p.price}</div>
                </div>
              </div>
            </div>
            <p className="priseModal">${p.price * p.amount}</p>
          </div>
         
          <div className="border">

          </div>
 </>
        ))}
      </div>

      <div className="orderTotal">
        <p className="orderTitle">Order Total</p>
        <p className="allPrice">${cart.reduce((total, p) => total + p.price * p.amount, 0)}</p>
      </div>
      <button onClick={() => setModal(false)} className="sendButton">
        Start New Order
      </button>
    </div>
  );
}

// export default Modal
