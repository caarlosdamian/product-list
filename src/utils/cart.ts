const getItemsWithQuantity = (cart: ItemWithQuantity[]) =>
  cart.filter((ele) => ele.quantity > 0);

const getNewCartWithItem = (
  cart: ItemWithQuantity[],
  newItem: Item,
  actualItem: ItemWithQuantity,
) => {
  const newCart = cart.map((product) => {
    if (newItem.id === product.id) {
      return { ...product, quantity: product.quantity + actualItem.quantity };
    }
    return product;
  });
  return newCart;
};

export { getItemsWithQuantity, getNewCartWithItem };
