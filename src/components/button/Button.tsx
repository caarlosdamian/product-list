import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type VariantType = 'primary' | 'secondary' | 'native';
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: VariantType;
  customStyle?: boolean;
}

export const Button = ({
  variant = 'primary',
  children,
  className,
  customStyle,
  ...props
}: Props) => {
  const style: Record<VariantType, string> = {
    primary: 'bg-red-base text-white hover:bg-[#952C0B]',
    secondary: 'ring-rose-400 ring-1 hover:ring-red-base hover:text-red-base',
    native: '',
  };
  const generalStyles = ' p-3 rounded-full';
  return (
    <button
      {...props}
      className={`cursor-pointer ${variant !== 'native' ? style[variant].concat(generalStyles).concat(customStyle ? (className as string) : '') : className}`}
    >
      {children}
    </button>
  );
};
