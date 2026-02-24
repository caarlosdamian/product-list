interface Item {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}
interface ItemWithQuantity extends Item {
  quantity: number;
}

type GlobalStoreState = { cart: ItemWithQuantity[]; items: Item[] };

type GlobalStoreActions = {
  addOrRemoveItem: (itemWithQuantity: ItemWithQuantity) => void;
  deleteCart: () => void;
  deleteItem: (id: number) => void;
};

type GlobalStore = GlobalStoreState & GlobalStoreActions;
