import { Card } from '../../components/card/Card';
import { Cart } from '../../components/cart/Cart';
import { ItemButton } from '../../components/itemButton/ItemButton';
import { useGlobalStore } from '../../lib/zustand';
import { isItemAlreadyInCart } from '../../utils/cart';

export const Main = () => {
  const { items, cart } = useGlobalStore();
  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50">
      {/*   */}
      <div className="w-full px-28 flex flex-col md:flex-row p-6  gap-8">
        <div className="flex flex-col gap-8">
          <h1 className='font-preset-1 font-red-hat'>Desserts</h1>
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
          <Cart />
        </div>
      </div>
    </main>
  );
};
