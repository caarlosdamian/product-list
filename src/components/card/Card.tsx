import { type ReactNode } from 'react';

interface Props {
  children: ReactNode | ((item: ItemWithQuantity) => ReactNode);
  item: ItemWithQuantity;
}

interface ImageProp {
  item: ItemWithQuantity;
}

// TODO: terminar layout
// TODO: mapeo de imagenes segun screen
export const Card = ({ children, item }: Props) => {
  return (
    <div className="flex flex-col w-full gap-9 cursor-pointer">
      {typeof children === 'function' ? children(item) : children}

      <div className="flex flex-col gap-1">
        <p className='font-preset-4 text-rose-500 font-red-hat'>{item.category}</p>
        <p className='font-preset-3 text-rose-900 font-red-hat'>{item.name}</p>
        <p className='font-preset-3 text-red-base font-red-hat'>{item.price}</p>
      </div>
    </div>
  );
};

const ImageCard = ({ item }: ImageProp) => {
  return (
    <img
      className="rounded-md max-h-54.5 w-full object-cover hover:ring-red-base hover:ring-2"
      src={item.image.desktop}
      alt={item.name}
    />
  );
};

Card.ImageCard = ImageCard;
