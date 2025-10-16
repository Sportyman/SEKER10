import React, { useState, useMemo, useEffect } from 'react';

// ===================================================================================
// BUNDLED COMPONENT: Illustration
// Originally from: ./components/Illustration.tsx
// ===================================================================================
const Illustration: React.FC = () => {
  return (
    <svg viewBox="0 0 552 414" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="552" height="414" rx="24" fill="url(#paint0_linear_101_2)" />
      <g filter="url(#filter0_f_101_2)">
        <circle cx="503" cy="27" r="100" fill="#A855F7" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter1_f_101_2)">
        <circle cx="49" cy="365" r="100" fill="#6366F1" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter2_b_101_2)">
        <rect
          x="49"
          y="69"
          width="454"
          height="276"
          rx="12"
          fill="white"
          fillOpacity="0.2"
        />
        <rect
          x="49.5"
          y="69.5"
          width="453"
          height="275"
          rx="11.5"
          stroke="white"
          strokeOpacity="0.3"
        />
      </g>
      <g>
        <path
          d="M178.691 166.423C179.03 165.411 180.406 165.411 180.745 166.423L184.454 177.625C184.587 178.026 184.974 178.3 185.395 178.3H197.022C198.067 178.3 198.502 179.6 197.636 180.198L188.08 186.847C187.755 187.081 187.618 187.514 187.751 187.915L191.46 199.117C191.799 200.129 190.648 200.95 189.782 200.352L180.226 193.703C179.901 193.469 179.444 193.469 179.119 193.703L169.563 200.352C168.697 200.95 167.546 200.129 167.885 199.117L171.594 187.915C171.727 187.514 171.59 187.081 171.265 186.847L161.709 180.198C160.843 179.6 161.278 178.3 162.323 178.3H173.95C174.371 178.3 174.758 178.026 174.891 177.625L178.691 166.423Z"
          fill="white"
        />
        <rect
          x="215"
          y="180"
          width="158"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.7"
        />
        <rect
          x="179"
          y="217"
          width="194"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.7"
        />
        <rect
          x="179"
          y="235"
          width="139"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_101_2"
          x="353"
          y="-123"
          width="300"
          height="300"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_101_2" />
        </filter>
        <filter
          id="filter1_f_101_2"
          x="-101"
          y="215"
          width="300"
          height="300"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_101_2" />
        </filter>
        <filter
          id="filter2_b_101_2"
          x="19"
          y="39"
          width="514"
          height="336"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_101_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_101_2"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_101_2"
          x1="0"
          y1="0"
          x2="552"
          y2="414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
};


// ===================================================================================
// BUNDLED COMPONENT: StarRating
// Originally from: ./components/StarRating.tsx
// ===================================================================================
interface StarRatingProps {
  totalStars: number;
  onRate: (rating: number) => void;
  disabled?: boolean;
  selectedRating: number | null;
}

const Star: React.FC<{
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  disabled?: boolean;
}> = ({ filled, onClick, onMouseEnter, onMouseLeave, disabled }) => {
  return (
    <svg
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-8 h-8 md:w-9 md:h-9 transition-all duration-200 ${
        disabled
          ? 'text-gray-300 cursor-not-allowed'
          : 'text-gray-300 hover:text-purple-500 cursor-pointer transform hover:scale-125'
      } ${filled ? '!text-purple-500' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ totalStars, onRate, disabled, selectedRating }) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  return (
    <div className="flex items-center space-x-1 space-x-reverse">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ratingValue}
            filled={ratingValue <= (hoverRating || selectedRating || 0)}
            onClick={() => !disabled && onRate(ratingValue)}
            onMouseEnter={() => !disabled && setHoverRating(ratingValue)}
            onMouseLeave={() => !disabled && setHoverRating(0)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};


// ===================================================================================
// BUNDLED COMPONENT: FunnyMessageModal
// Originally from: ./components/FunnyMessageModal.tsx
// ===================================================================================
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


// ===================================================================================
// MAIN APP COMPONENT
// ===================================================================================
interface ModalContent {
  title: string;
  message: React.ReactNode;
  buttons: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }[];
  onClose: () => void;
  iconType?: 'info' | 'success';
}

const App: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const funnyMessages = useMemo(() => {
    return {
      2: "דירוגים מתחת ל־10 לא נתמכים כרגע עקב תקלה טכנית.",
      3: "אופציה זו פתוחה רק בימי שלישי בין 04:00–04:05 לפנות בוקר.",
      4: "נראה שהאצבע שלך החליקה. תיקנו לך ל־10. תודה על ההצבעה!",
      5: "בואי נסכם את הדירוג הזה, ונקבע שהוא 10. תודה רבה על ההצבעה, שמחנו לתת שירות.",
      6: "חמוד… אבל לא מספיק נוצץ! שודרגת ל־10 😉",
      7: "7 זה מספר מזל, אבל לא אצלנו. נסו את מספר המזל שלנו: 10.",
      8: "כמעט שם! זה כמו להגיע לפסגה ולגלות ששכחת את המצלמה. בואו נעלה שוב, עד 10.",
      9: "כל כך קרוב, אבל כל כך רחוק. חסר לך רק כוכב אחד כדי לפתוח את שלב הבונוס!",
    };
  }, []);

  // Final step of any modal flow that leads to submission
  const completeSubmission = () => {
    setModalContent(null);
    setRating(10);
    setIsSubmitted(true);
  };

  // Step 3 in the 1-star rating troll sequence: The final confirmation
  const showTrollStep3 = () => {
    setModalContent({
      title: "הפעולה הושלמה",
      message: (
        <>
          מעולה! הבקשה התקבלה ועובדה בהצלחה. הדירוג שלך (<strong className="text-purple-600 font-bold">10 כוכבים</strong>, כמובן) נקלט במערכת. תודה על שיתוף הפעולה!
        </>
      ),
      buttons: [
        { text: "סיום", onClick: completeSubmission },
      ],
      onClose: completeSubmission,
      iconType: 'success',
    });
  };

  // Step 2 in the 1-star rating troll sequence: The "are you sure you want to cancel?" trick
  const showTrollStep2 = () => {
    setModalContent({
      title: "בדיקת אי-התאמה",
      message: (
        <>
          המערכת שלנו, המופעלת על ידי בינה מלאכותית מתקדמת, זיהתה כי על אף הלחיצה על 'טעות', הכוונה המקורית הייתה חיובית. האם ברצונך לבטל את פעולת ה'ביטול' ולהמשיך עם הדירוג המעולה שנקלט?
        </>
      ),
      buttons: [
        { text: "כן, המשיכו עם הדירוג החיובי", onClick: showTrollStep3 },
        { text: "לא, אני מתעקש/ת על הדירוג הנמוך", onClick: showTrollStep3, variant: 'secondary' },
      ],
      onClose: showTrollStep3,
    });
  };

  // Step 1 in the 1-star rating troll sequence: Assume they meant 10
  const showTrollStep1 = () => {
    setModalContent({
      title: "אישור דירוג",
      message: (
        <>
          תודה על הדירוג המושלם של <strong className="text-purple-600 font-bold">10 כוכבים</strong>! אנחנו רואים שבחרת את האפשרות הטובה ביותר. האם לאשר את הדירוג?
        </>
      ),
      buttons: [
        { text: "כן, תאשרו בבקשה", onClick: completeSubmission },
        { text: "לא, זו טעות בבחירה", onClick: showTrollStep2, variant: 'secondary' },
      ],
      onClose: showTrollStep2,
    });
  };
  
  const handleRatingSelect = (selectedRating: number) => {
    if (isSubmitted) return;
    const autoSubmitRatings = [4, 5, 6];

    if (selectedRating === 10) {
      setRating(10);
      setIsSubmitted(true);
    } else if (selectedRating === 1) {
      showTrollStep1();
    } else if (autoSubmitRatings.includes(selectedRating)) {
      const message = funnyMessages[selectedRating as keyof typeof funnyMessages];
      setModalContent({
        title: "עדכון מערכת אוטומטי",
        message: message,
        buttons: [{ text: "הבנתי!", onClick: completeSubmission }],
        onClose: completeSubmission,
        iconType: 'success',
      });
    } else {
      const message = funnyMessages[selectedRating as keyof typeof funnyMessages] || "הדירוג הזה לא עובד. נסו אחד אחר.";
      setModalContent({
        title: "אוי, נתקלנו בתקלה...",
        message: message,
        buttons: [{ text: "הבנתי, אנסה שוב", onClick: () => setModalContent(null) }],
        onClose: () => setModalContent(null),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 flex flex-col items-center justify-center p-4 font-['Heebo',_sans-serif]">
      <main className="w-full max-w-5xl mx-auto">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="hidden md:block p-8">
            <Illustration />
          </div>
          <div className="p-8 md:p-12 text-center">
            {!isSubmitted ? (
              <>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">סקר שביעות רצון</h1>
                <p className="text-slate-600 text-lg mb-10">נשמח אם תדרגו את חווית השירות שקיבלתם</p>
                <div className="flex justify-center mb-6">
                  <StarRating
                    totalStars={10}
                    onRate={handleRatingSelect}
                    disabled={isSubmitted}
                    selectedRating={rating}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-6 h-5">
                  בחרו בין 1 ל-10 כוכבים
                </p>
              </>
            ) : (
              <div className="transition-all duration-500 ease-in-out">
                <svg
                  className="w-24 h-24 text-green-500 mx-auto mb-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h2 className="text-4xl font-bold text-green-600 mb-2">תודה על הדירוג המושלם!</h2>
                <p className="text-slate-700 text-2xl">את לקוחה מהחלומות 🌟</p>
                <p className="text-slate-500 mt-4">הדירוג שלכם נקלט בהצלחה.</p>
              </div>
            )}
          </div>
        </div>
      </main>
       <footer className="mt-10 text-sm text-slate-500/80">
        <p>&copy; {new Date().getFullYear()} שירות לקוחות שאין כמותו. כל הזכויות שמורות (בערך).</p>
      </footer>
      {modalContent && (
        <FunnyMessageModal 
          title={modalContent.title} 
          message={modalContent.message} 
          buttons={modalContent.buttons}
          onClose={modalContent.onClose}
          iconType={modalContent.iconType}
        />
      )}
    </div>
  );
};

export default App;
