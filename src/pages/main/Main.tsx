import { useGlobalStore } from '../../lib/zustand';

export const Main = () => {
  const { items, setCart } = useGlobalStore();
  console.log('items', items);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-3">
        <button onClick={() => setCart({ ...items[0], quantity: -2 })}>
          Decrementar
        </button>
        <button onClick={() => setCart({ ...items[0], quantity: 2 })}>
          Incrementar
        </button>
      </div>
    </div>
  );
};
