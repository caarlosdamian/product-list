import { create } from 'zustand';
import { items } from '../utils/data';
import { devtools, persist } from 'zustand/middleware';
import { getItemsWithQuantity, getNewCartWithItem } from '../utils/cart';
// TODO: agregar esta funcionalidad
// eliminar cart
// eliminar item individual
export const useGlobalStore = create<GlobalStore>()(
  persist(
    devtools((set, get) => ({
      cart: [],
      items,

      setCart: (item) => {
        const { cart } = get();

        const isItemAlreadyInCart = cart.find(
          (product) => product?.id === item.id,
        );

        if (isItemAlreadyInCart) {
          const newCart = getNewCartWithItem(cart, isItemAlreadyInCart, item);

          set({
            cart: getItemsWithQuantity(newCart),
          });
          return;
        }
        set({
          cart: [...cart, item],
        });
      },
    })),
    { name: 'cart' },
  ),
);
