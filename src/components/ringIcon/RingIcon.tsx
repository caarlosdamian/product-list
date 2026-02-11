
interface Props {
  image: string;
}

export const RingIcon = ({ image }: Props) => {
  return (
    <div
      className="ring-amber-300 border-2 rounded-full size-5
          flex justify-center items-center"
    >
      <img src={image} alt="increment" className="object-contain w-2.5 h-2.5" />
    </div>
  );
};
