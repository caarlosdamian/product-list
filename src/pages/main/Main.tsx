import { Card } from '../../components/card/Card';
import { ItemButton } from '../../components/itemButton/ItemButton';
import { useGlobalStore } from '../../lib/zustand';
import { isItemAlreadyInCart } from '../../utils/cart';

export const Main = () => {
  const { items, cart } = useGlobalStore();
  return (
    <div className="p-6 bg-rose-50 flex w-full">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-200">
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
      <div className=" bg-amber-500">d</div>
    </div>
  );
};
