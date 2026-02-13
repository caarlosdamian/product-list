import { useGlobalStore } from '../../lib/zustand';

export const Main = () => {
  const { items, setCart } = useGlobalStore();
  console.log('items',items);
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() =>
          setCart({
              title: 'Minimalist Leather Wallet',
              category: 'Accessories',
              price: 49.99,
              img: 'https://example.com/images/leather-wallet.jpg',
              quantity: -2
            })
        }
      >
        click
      </button> 
         <button
        onClick={() =>
          setCart({
              title: 'Minimalist Leather Wallet',
              category: 'Accessories',
              price: 49.99,
              img: 'https://example.com/images/leather-wallet.jpg',
              quantity: 2
            })
        }
      >
        Incrementar
      </button>
    </div>
  );
};
