import { Card } from '../../components/card/Card';
import { useGlobalStore } from '../../lib/zustand';
import { isItemAlreadyInCart } from '../../utils/cart';

export const Main = () => {
  const { items, cart } = useGlobalStore();
  return (
    <div className="p-6">
      <div className="flex flex-wrap">
        {items.map((element) => {
          const elementInCart = isItemAlreadyInCart(cart, element);
          const itemWithQuantity = {
            ...element,
            quantity: elementInCart ? elementInCart.quantity : 0,
          };
          return (
            <Card item={itemWithQuantity}>
              {(item) => <Card.ImageCard item={item} />}
            </Card>
          );
        })}
      </div>
      <div className=""></div>
    </div>
  );
};
