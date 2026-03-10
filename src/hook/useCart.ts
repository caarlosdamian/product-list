import { useGlobalStore } from '../lib/zustand';

export const useCart = () => {
  const { cart } = useGlobalStore();
  const { totalAmout, totalItems } = cart.reduce(
    (acc, product) => {
      // acc += product.quantity;
      // return acc;
      acc['totalItems'] += product.quantity;
      acc['totalAmout'] += product.quantity * product.price;

      return acc;
    },
    { totalItems: 0, totalAmout: 0 },
  );

  return { totalAmout, totalItems, cart };
};
