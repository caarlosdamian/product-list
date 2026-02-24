import { useState } from 'react';

interface Props {
  image: string;
  hoverImg: string;
}

export const RingIcon = ({ image, hoverImg }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="ring-amber-300 border-2 rounded-full size-5
          flex justify-center items-center hover:bg-white"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <img
          src={hoverImg}
          alt="increment"
          className="object-contain w-2.5 h-2.5"
        />
      ) : (
        <img
          src={image}
          alt="increment"
          className="object-contain w-2.5 h-2.5"
        />
      )}
    </div>
  );
};
