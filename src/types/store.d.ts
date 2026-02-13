interface Item {
  title: string;
  category: string;
  price: number;
  img: string;
}

interface ItemWithQuantity extends Item {
  quantity: number;
}

type GlobalStoreState = { cart: ItemWithQuantity[]; items: Item[] };

type GlobalStoreActions = {
  setCart: (
    itemWithQuantity:
      | ItemWithQuantity
  ) => void;
};

type GlobalStore = GlobalStoreState & GlobalStoreActions;
