import { create } from 'zustand';
import { items } from '../utils/data';
import { devtools } from 'zustand/middleware';

export const useGlobalStore = create<GlobalStore>()(
  devtools((set, get) => ({
    cart: [],
    items,

    setCart: (item) => {
      const { cart } = get();

      const itemInCart = cart.find(
        (product) =>
          product.title.toLocaleLowerCase() === item.title.toLocaleLowerCase(),
      );
      if (itemInCart) {
        const newCart = cart.map((product) => {
          if (
            itemInCart.title.toLocaleLowerCase() ===
            product.title.toLocaleLowerCase()
          ) {
            return { ...product, quantity: product.quantity + item.quantity };
          }
          return product;
        });
        const withourCero = newCart.filter((ele) => ele.quantity > 0);

        set({
          cart: withourCero,
        });
        return;
      }
      set({
        cart: [...cart, item],
      });
    },
  })),
);
