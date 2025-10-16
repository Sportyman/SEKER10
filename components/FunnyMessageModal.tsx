import React, { useEffect } from 'react';

interface ModalButton {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface FunnyMessageModalProps {
  title: string;
  message: React.ReactNode;
  buttons: ModalButton[];
  onClose: () => void;
  iconType?: 'info' | 'success';
}

const FunnyMessageModal: React.FC<FunnyMessageModalProps> = ({ title, message, buttons, onClose, iconType = 'info' }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full text-center border border-gray-200/50 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-5 ${iconType === 'success' ? 'bg-green-100' : 'bg-purple-100'}`}>
            {iconType === 'success' ? (
                 <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ) : (
                <svg className="h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-8">{message}</p>
        <div className="flex flex-col space-y-3">
          {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`w-full font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105 ${
                    button.variant === 'secondary' 
                    ? 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {button.text}
              </button>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FunnyMessageModal;