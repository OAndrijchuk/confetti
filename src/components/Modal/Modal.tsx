import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { useEffect, ReactNode } from 'react';
import { SectionTitle } from '..';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className=" z-[9999999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 max-w-[360px] mx-auto px-5 py-[51px] bg-extraAccent md:rounded-3xl md:min-w-[608px] md:px-[83px] md:py-[57px]">
            <button
              onClick={onClose}
              className="absolute block w-8 h-8 top-5 right-4 cursor-pointer rounded-full hover:bg-extraAccent transition-colors hover:text-accent rotate-45"
            >
              <SpriteSVG name="plus" />
            </button>
            <SectionTitle>Dodaj opinię</SectionTitle>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
