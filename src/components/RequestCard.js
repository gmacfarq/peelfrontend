import "../stylesheets/RequestCard.css";
import '../stylesheets/StyleGuide.css';
import { emojiTomato, orangeInfo } from "../generalPics";
import { useEffect, useState } from "react";
import PEELApi from "../api";
import OrderCard from "./OrderCard";


function RequestCard({ request }) {
  const [displayingOrders, setDisplayingOrders] = useState(false);
  const [orders, setOrders] = useState({
    data: [],
    isLoading: true
  });

  useEffect(function fetchOrdersWhenMounted() {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const result = await PEELApi.getOrders(request.id);
      setOrders({
        data: result,
        isLoading: false
      });
    } catch (err) {
      alert(err);
    }
  }

  function displayOrders() {
    displayingOrders ? setDisplayingOrders(false) : setDisplayingOrders(true);
  }

  return (
    <>

      <div className="request">
        <div className="group">
          <img className="emoji-tomato" alt="Emoji tomato" src={emojiTomato} />
          <div className="overlap-group">
            <div className="copy">
              <div className="main-copy">
                <div className="label">
                  <div className="tomatoes">Tomatoes</div>
                </div>
              </div>
              <div className="text-wrapper">{request.quantity} Lbs</div>
            </div>
            <div className="bar">
              <div className="rectangle" style={
                {width: request.quantityFilled / request.quantity * 211 + 'px'}
                }/>
              <div className="rectangle-2" style={
                {width: 211 - (request.quantityFilled / request.quantity * 211) + 'px'}
                }/>
              <div className="div">{Math.floor(request.quantityFilled / request.quantity * 100)}% Filled {request.quantityFilled === request.quantity ? <> 🎉 </>:<> </> } </div>
            </div>
          </div>
        </div>
        {request.status === "Active" ?


          <div className="text-wrapper-2">{request.status}</div>

          :
          <div className="text-wrapper-3">{request.status}</div>
        }

        <img
          className="details-icon"
          alt="Details icon"
          src={orangeInfo}
          onClick={displayOrders}
        />
      </div>
      {displayingOrders ?
        <>
          <div className="orders">
            {orders.isLoading ?
              <div className="loading">Loading...</div>
              :
              orders.data.map(order => (
                <OrderCard order={order} />


                // <div className="order">
                //   <div className="group-2">
                //     <div className="copy-2">
                //       <div className="main-copy-2">
                //         <div className="label-2">
                //           <div className="tomatoes-2">{order.username}</div>
                //         </div>
                //       </div>
                //       <div className="text-wrapper-3">{order.quantity} Lbs</div>
                //     </div>
                //     <div className="bar-2">
                //       <div className="rectangle-2" />
                //     </div>
                //   </div>
                //   <div className="text-wrapper-4">{order.status}</div>
                // </div>
              ))
            }
          </div>
        </>
        :
        <></>
      }
    </>
  );
}

export default RequestCard;