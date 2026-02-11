import { RingIcon } from '../ringIcon/RingIcon';
import DecrementIcon from '../../assets/images/icon-decrement-quantity.svg';
import IcrementIcon from '../../assets/images/icon-increment-quantity.svg';
import { Button } from '../button/Button';
import { useState } from 'react';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
type IcontActions = typeof DECREMENT | typeof INCREMENT;

export const ItemButton = () => {
  const [couter, setCouter] = useState(0);

  const addOrRemoveItem = (action: IcontActions, quantity: number = 1) => {
    setCouter((prevState) => {
      if (action === DECREMENT) {
        return prevState ? prevState - quantity : 0;
      } else {
        return prevState + quantity;
      }
    });
  };

  return (
    <div className="bg-red-base text-white p-3 rounded-full">
      <div className="flex justify-between min-w-40">
        <Button
          disabled={!couter}
          variant="native"
          onClick={() => addOrRemoveItem(DECREMENT)}
        >
          <RingIcon image={DecrementIcon} />
        </Button>
        {couter}
        <Button variant="native" onClick={() => addOrRemoveItem(INCREMENT)}>
          <RingIcon image={IcrementIcon} />
        </Button>
      </div>
    </div>
  );
};
