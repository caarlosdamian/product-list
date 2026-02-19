import { type ReactNode } from 'react';

interface Props {
  children: ReactNode | ((item: ItemWithQuantity) => ReactNode);
  item: ItemWithQuantity;
}

interface ImageProp {
  item: ItemWithQuantity;
}

// TODO: terminar layout
export const Card = ({ children, item }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {/* 
      children as a fn
      render prop
      */}
      {typeof children === 'function' ? children(item) : children}

      <div className="flex flex-col">
        <p>{item.category}</p>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

const ImageCard = ({ item }: ImageProp) => {
  return (
    <img
      className="rounded-md max-h-54.5 w-full object-cover"
      src={item.image.desktop}
      alt={item.name}
    />
  );
};

Card.ImageCard = ImageCard;
