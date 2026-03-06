import RemoveItem from '../../assets/images/icon-remove-item.svg';
import { useGlobalStore } from '../../lib/zustand';

interface Props {
  item: ItemWithQuantity;
}

export const CartItem = ({ item: { name, quantity, price, id } }: Props) => {
  const { deleteItem } = useGlobalStore();

  return (
    <div className="flex justify-between w-full items-center pb-6 border-b-rose-100 border-b">
      <div className="flex flex-col gap-2">
        <div className="">
          <p className="font-preset-4-bold font-red-hat">{name}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-preset-4-bold text-red-base">{quantity}x</p>
          <p className="font-preset-4 text-rose-500 font-light">
            @ ${price.toFixed(2)}
          </p>
          <p className="font-preset-4-bold text-rose-500">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <img
        src={RemoveItem}
        alt="RemoveItem"
        className=" ring-2 rounded-full p-1 ring-rose-400/50 cursor-pointer"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
};
