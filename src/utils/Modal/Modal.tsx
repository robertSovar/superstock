import { ReactNode } from "react";
import { useClickOutside } from "../UseClickOutsideHook/UseClickOutsideHook";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    onClose(); // se închide doar la click în afara containerului alb
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={ref} className="bg-white p-6 rounded-lg shadow-lg relative">
        <div
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
