import DeleteIcon from './mobile-components/delete-icon';
import QuantityField from './mobile-components/quantity-field';

function MobileRow(props) {
  console.log('cart item: ', props.data);
  // return <span>NI</span>

  const { imgUrl, nowPrice, quantity, title, id } = props.data;

  return (
    <div className="mobile-row">
      <div className="img-desc fb-row fb--ai-start">
        <div className="image-container">
          <img src={imgUrl} />
        </div>
        <div className="desc">{title}</div>
      </div>
      <div className="price-qty-subtot fb-row fb--ai-start">
        <div className="price">
          <span>Price:</span>
          <p>{nowPrice}</p>
        </div>
        <div className="qty">
          <span>Qty:</span>
          <QuantityField quantity={quantity} id={id} />
        </div>
        <div className="subtot">
          <span>Subtotal:</span>
          <p>${+nowPrice?.slice(1) * quantity}</p>
        </div>
        <DeleteIcon id={id} />
      </div>
    </div>
  );
}

export default MobileRow;
