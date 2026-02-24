import { RingIcon } from '../ringIcon/RingIcon';
import DecrementIcon from '../../assets/images/icon-decrement-quantity-white.svg';
import DecrementIconRed from '../../assets/images/icon-decrement-quantity.svg';
import IcrementIcon from '../../assets/images/icon-increment-quantity.svg';
import IcrementIconRed from '../../assets/images/icon-increment-quantity-red.svg';
import CartIcon from '../../assets/images/icon-add-to-cart.svg';
import { Button } from '../button/Button';
import { useState } from 'react';
import { useGlobalStore } from '../../lib/zustand';

// agregar maybe itemid???
interface Props {
  item: ItemWithQuantity;
  className?: string;
}

export const ItemButton = ({ item, className }: Props) => {
  const [showQuantity, setShowQuantity] = useState(() => item.quantity !== 0);
  const { addOrRemoveItem } = useGlobalStore();

  return (
    <div
      {...(showQuantity
        ? {}
        : {
            onClick: () => {
              addOrRemoveItem({ ...item, quantity: 1 });
              setShowQuantity(true);
            },
          })}
      className={`rounded-full min-w-40 ${showQuantity ? 'bg-red-base text-white p-3' : 'bg-white  text-black ring-1 ring-rose-400 hover:text-red-base py-3 px-7'} ${className}`}
    >
      {showQuantity ? (
        <div className="flex justify-between">
          <Button
            // disabled={}
            variant="native"
            onClick={() => {
              if (item.quantity === 1) {
                setShowQuantity(false);
              }
              addOrRemoveItem({ ...item, quantity: -1 });
            }}
          >
            <RingIcon image={DecrementIcon} hoverImg={DecrementIconRed} />
          </Button>
          {item.quantity}
          <Button
            variant="native"
            onClick={() => addOrRemoveItem({ ...item, quantity: 1 })}
          >
            <RingIcon image={IcrementIcon} hoverImg={IcrementIconRed} />
          </Button>
        </div>
      ) : (
        <Button
          // disabled={!couter}
          variant="native"
          className="flex items-center gap-1 "
          // onClick={}
        >
          <img
            src={CartIcon}
            alt="increment"
            className="object-contain w-4 h-4"
          />
          <p>Add to Cart</p>
        </Button>
      )}
    </div>
  );
};
