import React, { memo, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContex";
import Modal from './Modal'

const YourCard = () => {
  const { dispatch, cart } = useGlobalContext();
  const [modal, setModal] = useState(false)
  const images = cart.map(item => item.image.thumbnail);
  console.log(images); 
  document.body.style.overflowY = modal ? "hidden" : "auto";
  
  console.log(cart);
  if (cart.length === 0) {
    return (
      <div>
        <div className="">
          <div className="yourCard-container">
            <div className="yourCard_title">Your Cart ({cart.length})</div>

            <div className="yourCard-img-text">
              <img
                className="yourCardImg"
                src="./images/illustration-empty-cart.svg"
                alt=""
              />
              <p className="yourCardWarningMessage">
                Your added items will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="">
          <div className="yourCard-container">
            <div className="yourCard_title">Your Cart ({cart.length})</div>
            
            <div className="yourCardList">
              <div className="cardListItem">

           

                {cart.map((p, index) => (
                
                  <div key={index} className="yourCardItem">
                   
                    <div className="yourCardDescription">
                      <div className="descriptionTitle">{p.category}</div>
                      <div className="descriptonPrice">
                        <p className="length">{p.amount}x</p>
                        <p className="price">@ ${p.price} </p>
                        <p className="priseStrong"> ${p.price * p.amount}</p>
                      </div> 
                    </div>
                    <button
                      onClick={() => {
                        dispatch({ type: "DELETE", payload: p.id});
                      }}
                      className="btn-remove"
                    >
                      <img src="./images/icon-remove-item.svg" alt="" />
                    </button>
                  </div>
                       ))}
              </div>
              <div className="border"></div>

              <div className="orderTotal">
                <p className="orderTitle">Order Total</p>
                <p className="allPrice">
                  ${cart.reduce((total, p) => total + p.price * p.amount, 0)}
                </p>
              </div>
              <div className="carbon">
                <img src="./images/icon-carbon-neutral.svg" alt="" />
                <p>
                  This is a <strong> carbon-neutral</strong> delivery
                </p>
              </div>
              <button onClick={() => setModal(true)} className="modalButton">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
        {modal &&  <><Modal modal={modal} setModal={setModal}/>  </>
    }
      </div>
    );
  }
};

export default YourCard;
