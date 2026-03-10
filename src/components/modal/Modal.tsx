import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
}

export const Modal = ({ show, children, onClose }: Props) => {
  return (
    <>
      {show &&
        createPortal(
          <div className="fixed top-0 bottom-0 flex w-full  h-full pt-23.75 md:pt-0 md:items-center md:justify-center">
            <div
              className="absolute bg-black/50 top-0 bottom-0 w-full h-full"
              onClick={() => onClose()}
            ></div>
            <div className="relative bg-white py-10 px-6 w-full h-screen rounded-t-xl round md:h-151.25 md:w-151.25 md:rounded-b-xl">
              {children}
            </div>
          </div>,
          document.getElementById('root')!,
        )}
    </>
  );
};
