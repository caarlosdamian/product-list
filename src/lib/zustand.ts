import { create } from 'zustand';
import { items } from '../utils/data';
import { devtools, persist } from 'zustand/middleware';
import {
  getItemsWithQuantity,
  getNewCartWithItem,
  isItemAlreadyInCart,
} from '../utils/cart';

export const useGlobalStore = create<GlobalStore>()(
  persist(
    devtools((set, get) => ({
      cart: [],
      items,

      addOrRemoveItem: (item) => {
        const { cart } = get();

        const itemPresent = isItemAlreadyInCart(cart, item);

        if (itemPresent) {
          const newCart = getNewCartWithItem(cart, itemPresent, item);

          set({
            cart: getItemsWithQuantity(newCart),
          });
          return;
        }
        set({
          cart: [...cart, item],
        });
      },
      deleteCart: () => {
        set({
          cart: [],
        });
      },
      deleteItem: (itemId) => {
        const { cart } = get();
        const cartWithOutItem = cart.filter(({ id }) => id !== itemId);
        set({
          cart: cartWithOutItem,
        });
      },
    })),
    { name: 'cart' },
  ),
);
