import React, { useState, useMemo } from 'react';
import StarRating from './components/StarRating.tsx';
import FunnyMessageModal from './components/FunnyMessageModal.tsx';
import Illustration from './components/Illustration.tsx';

// Define the interface for modal content to ensure type safety
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