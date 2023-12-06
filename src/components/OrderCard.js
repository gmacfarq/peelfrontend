import "../stylesheets/OrderCard.css";
import '../stylesheets/StyleGuide.css';

function OrderCard({ order, request }) {
  return (
    <div className="order-list">
      <div className="copy">
        <div className="main-copy">
          <div className="text-wrapper">{order.username}</div>
        </div>
        <div className="div">{order.quantity} Lbs</div>
      </div>
      <div className="status">{order.status}</div>
    </div>
  );
}

export default OrderCard;