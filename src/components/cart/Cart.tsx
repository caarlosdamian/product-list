import Cake from '../../assets/images/illustration-empty-cart.svg';
import { Button } from '../button/Button';
import { CartItem } from '../cartItem/CartItem';
import CarbonNeutral from '../../assets/images/icon-carbon-neutral.svg';
import { useCart } from '../../hook/useCart';

interface Props {
  handleChekout: () => void;
}
export const Cart = ({ handleChekout }: Props) => {
  const { cart, totalAmout, totalItems } = useCart();

  return (
    <div className="bg-white p-6 rounded-xl min-w-81.75 max-w-[384px] flex flex-col gap-6">
      <div className="">
        <p className="font-preset-2 text-red-base">Your Cart ({totalItems})</p>
      </div>
      <>
        {totalItems === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <img src={Cake} alt="Cake" className="w-32 h-32 object-cover" />
            <p className="font-preset-4-bold text-rose-500 font-red-hat">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            {cart.map((product) => (
              <CartItem key={product.id} item={product} />
            ))}
            <div className="flex justify-between w-full items-center">
              <p className="font-preset-4">Order Total</p>
              <p className="font-preset-2">${totalAmout.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-2 px-5.5 py-4 bg-rose-50 rounded-lg">
              <img src={CarbonNeutral} alt="CarbonNeutral" />
              <p className="font-preset-4">
                This is a <strong className="font-bold">carbon-neutral</strong>{' '}
                delivery
              </p>
            </div>
            <Button
              className=" not-even:w-full"
              customStyle
              onClick={() => handleChekout()}
            >
              Confirm Order
            </Button>
          </div>
        )}
      </>
    </div>
  );
};
