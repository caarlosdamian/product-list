import { useState } from 'react';
import { Card } from '../../components/card/Card';
import { Cart } from '../../components/cart/Cart';
import { ItemButton } from '../../components/itemButton/ItemButton';
import { Modal } from '../../components/modal/Modal';
import { useGlobalStore } from '../../lib/zustand';
import { isItemAlreadyInCart } from '../../utils/cart';
import Confirm from '../../assets/images/icon-order-confirmed.svg';
import { Button } from '../../components/button/Button';
import { useCart } from '../../hook/useCart';

export const Main = () => {
  const { items, cart, deleteCart } = useGlobalStore();
  const [showModal, setShowModal] = useState(false);
  const { totalAmout } = useCart();

  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50">
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="w-full  flex flex-col gap-8">
          <div className="w-full flex flex-col gap-6 font-red-hat">
            <img
              src={Confirm}
              alt="Confirm"
              className="object-contain w-12 h-12"
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-preset-1 w-1/2 md:w-full">Order Confirmed</h2>
              <p className="font-preset-4 text-rose-500 font-light">
                We hope you enjoy your food!
              </p>
            </div>
          </div>
          <div className="bg-rose-50 h-full w-full p-6 rounded-lg flex flex-col gap-4">
            {cart.map(({ price, quantity, name, image: { thumbnail } }) => (
              <div className="flex gap-4 items-center w-full border-b border-b-rose-100 pb-4">
                <img
                  src={thumbnail}
                  alt="image"
                  className="w-12 h-12 rouded-sm"
                />
                <div className="flex-1">
                  <p className="font-preset-4-bold font-red-hat">{name}</p>

                  <div className="flex gap-2">
                    <p className="font-preset-4-bold text-red-base">
                      {quantity}x
                    </p>
                    <p className="font-preset-4 text-rose-500 font-light">
                      @ ${price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="justify-self-end font-preset-3 text-rose-900">
                  ${(price * quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <p className="font-preset-4 text-rose-900">Order Total</p>
              <p className="font-preset-2 text-rose-900">${totalAmout}</p>
            </div>
          </div>
          <Button
            className=" not-even:w-full"
            customStyle
            onClick={() => {
              setShowModal(true);
              deleteCart();
            }}
          >
            Start New Order
          </Button>
        </div>
      </Modal>
      <div className="w-full px-28 flex flex-col md:flex-row p-6  gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-preset-1 font-red-hat">Desserts</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 max-w-200 ">
            {items.map((element) => {
              const elementInCart = isItemAlreadyInCart(cart, element);
              const itemWithQuantity = {
                ...element,
                quantity: elementInCart ? elementInCart.quantity : 0,
              };
              return (
                <Card item={itemWithQuantity}>
                  {(item) => (
                    <section className="relative">
                      <ItemButton
                        item={itemWithQuantity}
                        className="absolute -bottom-12.5 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                      />
                      <Card.ImageCard item={item} />
                    </section>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
        <div className="">
          <Cart handleChekout={() => setShowModal(true)} />
        </div>
      </div>
    </main>
  );
};
