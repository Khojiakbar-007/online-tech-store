import DeleteIcon from '../../public/icons/delete.svg';
import { useRemoveWholeItemFromCart } from '../../utils/context-utils';

const DropDownItem = ({ item }) => {
  const { quantity, imgUrl, title, id } = item;
  const removeItem = useRemoveWholeItemFromCart();

  return (
    <div className="drop-down__cart-items__item fb-row--center">
      <span>{quantity}x</span>
      <img src={imgUrl} alt="cart item image" width={65} height={65} />
      <p className="drop-down__cart-items__item__title">{title}</p>
      <div className="drop-down__cart-items__item__actions">
        <DeleteIcon onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default DropDownItem;
