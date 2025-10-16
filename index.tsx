const { useState, useMemo, useEffect, StrictMode, Fragment } = React;
// Fix: Declare ReactDOM as a global variable to resolve "Cannot find name 'ReactDOM'".
declare var ReactDOM: any;

const Illustration = () => {
  return React.createElement(
    "svg",
    { viewBox: "0 0 552 414", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
    React.createElement("rect", { width: "552", height: "414", rx: "24", fill: "url(#paint0_linear_101_2)" }),
    React.createElement(
      "g",
      { filter: "url(#filter0_f_101_2)" },
      React.createElement("circle", { cx: "503", cy: "27", r: "100", fill: "#A855F7", fillOpacity: "0.5" })
    ),
    React.createElement(
      "g",
      { filter: "url(#filter1_f_101_2)" },
      React.createElement("circle", { cx: "49", cy: "365", r: "100", fill: "#6366F1", fillOpacity: "0.5" })
    ),
    React.createElement(
      "g",
      { filter: "url(#filter2_b_101_2)" },
      React.createElement("rect", { x: "49", y: "69", width: "454", height: "276", rx: "12", fill: "white", fillOpacity: "0.2" }),
      React.createElement("rect", { x: "49.5", y: "69.5", width: "453", height: "275", rx: "11.5", stroke: "white", strokeOpacity: "0.3" })
    ),
    React.createElement(
      "g",
      null,
      React.createElement("path", { d: "M178.691 166.423C179.03 165.411 180.406 165.411 180.745 166.423L184.454 177.625C184.587 178.026 184.974 178.3 185.395 178.3H197.022C198.067 178.3 198.502 179.6 197.636 180.198L188.08 186.847C187.755 187.081 187.618 187.514 187.751 187.915L191.46 199.117C191.799 200.129 190.648 200.95 189.782 200.352L180.226 193.703C179.901 193.469 179.444 193.469 179.119 193.703L169.563 200.352C168.697 200.95 167.546 200.129 167.885 199.117L171.594 187.915C171.727 187.514 171.59 187.081 171.265 186.847L161.709 180.198C160.843 179.6 161.278 178.3 162.323 178.3H173.95C174.371 178.3 174.758 178.026 174.891 177.625L178.691 166.423Z", fill: "white" }),
      React.createElement("rect", { x: "215", y: "180", width: "158", height: "8", rx: "4", fill: "white", fillOpacity: "0.7" }),
      React.createElement("rect", { x: "179", y: "217", width: "194", height: "8", rx: "4", fill: "white", fillOpacity: "0.7" }),
      React.createElement("rect", { x: "179", y: "235", width: "139", height: "8", rx: "4", fill: "white", fillOpacity: "0.7" })
    ),
    React.createElement(
      "defs",
      null,
      React.createElement(
        "filter",
        { id: "filter0_f_101_2", x: "353", y: "-123", width: "300", height: "300", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
        React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
        React.createElement("feGaussianBlur", { stdDeviation: "25", result: "effect1_foregroundBlur_101_2" })
      ),
      React.createElement(
        "filter",
        { id: "filter1_f_101_2", x: "-101", y: "215", width: "300", height: "300", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
        React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
        React.createElement("feGaussianBlur", { stdDeviation: "25", result: "effect1_foregroundBlur_101_2" })
      ),
      React.createElement(
        "filter",
        { id: "filter2_b_101_2", x: "19", y: "39", width: "514", height: "336", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
        React.createElement("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "15" }),
        React.createElement("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_101_2" }),
        React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_101_2", result: "shape" })
      ),
      React.createElement(
        "linearGradient",
        { id: "paint0_linear_101_2", x1: "0", y1: "0", x2: "552", y2: "414", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { stopColor: "#6366F1" }),
        React.createElement("stop", { offset: "1", stopColor: "#A855F7" })
      )
    )
  );
};

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave, disabled }) => {
  const className = `w-8 h-8 md:w-9 md:h-9 transition-all duration-200 ${
    disabled
      ? 'text-gray-300 cursor-not-allowed'
      : 'text-gray-300 hover:text-purple-500 cursor-pointer transform hover:scale-125'
  } ${filled ? '!text-purple-500' : ''}`;
  
  return React.createElement(
    "svg",
    {
      onClick,
      onMouseEnter,
      onMouseLeave,
      className,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true"
    },
    React.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
  );
};

const StarRating = ({ totalStars, onRate, disabled, selectedRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return React.createElement(
    "div",
    { className: "flex items-center space-x-1 space-x-reverse", role: "radiogroup" },
    [...Array(totalStars)].map((_, index) => {
      const ratingValue = index + 1;
      return React.createElement(Star, {
        key: ratingValue,
        filled: ratingValue <= (hoverRating || selectedRating || 0),
        onClick: () => !disabled && onRate(ratingValue),
        onMouseEnter: () => !disabled && setHoverRating(ratingValue),
        onMouseLeave: () => !disabled && setHoverRating(0),
        disabled: disabled
      });
    })
  );
};

const FunnyMessageModal = ({ title, message, buttons, onClose, iconType = 'info' }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const iconSvg = iconType === 'success' ? 
    React.createElement("svg", { className: "h-8 w-8 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
      // Fix: Use kebab-case for SVG attributes to resolve potential TypeScript typing issues.
      React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
    ) : 
    React.createElement("svg", { className: "h-8 w-8 text-purple-600", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true" },
      // Fix: Use kebab-case for SVG attributes to resolve potential TypeScript typing issues.
      React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
    );

  return React.createElement(
    "div",
    { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4", onClick: onClose, role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title" },
    React.createElement(
      "div",
      { className: "bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full text-center border border-gray-200/50 animate-fade-in-up", onClick: (e) => e.stopPropagation() },
      React.createElement("div", { className: `mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-5 ${iconType === 'success' ? 'bg-green-100' : 'bg-purple-100'}` }, iconSvg),
      React.createElement("h3", { id: "modal-title", className: "text-2xl font-bold text-gray-900 mb-2" }, title),
      React.createElement("p", { className: "text-gray-600 mb-8" }, message),
      React.createElement(
        "div",
        { className: "flex flex-col space-y-3" },
        buttons.map((button, index) =>
          React.createElement(
            "button",
            {
              key: index,
              onClick: button.onClick,
              className: `w-full font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105 ${
                button.variant === 'secondary' ? 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'
              }`
            },
            button.text
          )
        )
      )
    ),
    React.createElement("style", null, `
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px) scale(0.95); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
    `)
  );
};

const App = () => {
  const [rating, setRating] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const funnyMessages = useMemo(() => ({
    2: "דירוגים מתחת ל־10 לא נתמכים כרגע עקב תקלה טכנית.",
    3: "אופציה זו פתוחה רק בימי שלישי בין 04:00–04:05 לפנות בוקר.",
    4: "נראה שהאצבע שלך החליקה. תיקנו לך ל־10. תודה על ההצבעה!",
    5: "בואי נסכם את הדירוג הזה, ונקבע שהוא 10. תודה רבה על ההצבעה, שמחנו לתת שירות.",
    6: "חמוד… אבל לא מספיק נוצץ! שודרגת ל־10 😉",
    7: "7 זה מספר מזל, אבל לא אצלנו. נסו את מספר המזל שלנו: 10.",
    8: "כמעט שם! זה כמו להגיע לפסגה ולגלות ששכחת את המצלמה. בואו נעלה שוב, עד 10.",
    9: "כל כך קרוב, אבל כל כך רחוק. חסר לך רק כוכב אחד כדי לפתוח את שלב הבונוס!",
  }), []);

  const completeSubmission = () => {
    setModalContent(null);
    setRating(10);
    setIsSubmitted(true);
  };

  const showTrollStep3 = () => {
    setModalContent({
      title: "הפעולה הושלמה",
      message: React.createElement(Fragment, null, 
        "מעולה! הבקשה התקבלה ועובדה בהצלחה. הדירוג שלך (",
        React.createElement("strong", { className: "text-purple-600 font-bold" }, "10 כוכבים"),
        ", כמובן) נקלט במערכת. תודה על שיתוף הפעולה!"
      ),
      buttons: [{ text: "סיום", onClick: completeSubmission }],
      onClose: completeSubmission,
      iconType: 'success'
    });
  };

  const showTrollStep2 = () => {
    setModalContent({
      title: "בדיקת אי-התאמה",
      message: "המערכת שלנו, המופעלת על ידי בינה מלאכותית מתקדמת, זיהתה כי על אף הלחיצה על 'טעות', הכוונה המקורית הייתה חיובית. האם ברצונך לבטל את פעולת ה'ביטול' ולהמשיך עם הדירוג המעולה שנקלט?",
      buttons: [
        { text: "כן, המשיכו עם הדירוג החיובי", onClick: showTrollStep3 },
        { text: "לא, אני מתעקש/ת על הדירוג הנמוך", onClick: showTrollStep3, variant: 'secondary' }
      ],
      onClose: showTrollStep3
    });
  };

  const showTrollStep1 = () => {
    setModalContent({
      title: "אישור דירוג",
      message: React.createElement(Fragment, null, 
        "תודה על הדירוג המושלם של ",
        React.createElement("strong", { className: "text-purple-600 font-bold" }, "10 כוכבים"),
        "! אנחנו רואים שבחרת את האפשרות הטובה ביותר. האם לאשר את הדירוג?"
      ),
      buttons: [
        { text: "כן, תאשרו בבקשה", onClick: completeSubmission },
        { text: "לא, זו טעות בבחירה", onClick: showTrollStep2, variant: 'secondary' }
      ],
      onClose: showTrollStep2
    });
  };

  const handleRatingSelect = (selectedRating) => {
    if (isSubmitted) return;
    const autoSubmitRatings = [4, 5, 6];

    if (selectedRating === 10) {
      setRating(10);
      setIsSubmitted(true);
    } else if (selectedRating === 1) {
      showTrollStep1();
    } else if (autoSubmitRatings.includes(selectedRating)) {
      const message = funnyMessages[selectedRating];
      setModalContent({
        title: "עדכון מערכת אוטומטי",
        message: message,
        buttons: [{ text: "הבנתי!", onClick: completeSubmission }],
        onClose: completeSubmission,
        iconType: 'success'
      });
    } else {
      const message = funnyMessages[selectedRating] || "הדירוג הזה לא עובד. נסו אחד אחר.";
      setModalContent({
        title: "אוי, נתקלנו בתקלה...",
        message: message,
        buttons: [{ text: "הבנתי, אנסה שוב", onClick: () => setModalContent(null) }],
        onClose: () => setModalContent(null)
      });
    }
  };

  const surveyContent = !isSubmitted ?
    React.createElement(Fragment, null,
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-800 mb-3" }, "סקר שביעות רצון"),
      React.createElement("p", { className: "text-slate-600 text-lg mb-10" }, "נשמח אם תדרגו את חווית השירות שקיבלתם"),
      React.createElement("div", { className: "flex justify-center mb-6" },
        React.createElement(StarRating, {
          totalStars: 10,
          onRate: handleRatingSelect,
          disabled: isSubmitted,
          selectedRating: rating
        })
      ),
      React.createElement("p", { className: "text-sm text-slate-500 mt-6 h-5" }, "בחרו בין 1 ל-10 כוכבים")
    ) :
    React.createElement("div", { className: "transition-all duration-500 ease-in-out" },
      React.createElement("svg", { className: "w-24 h-24 text-green-500 mx-auto mb-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
        // Fix: Use kebab-case for SVG attributes to resolve potential TypeScript typing issues.
        React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
      ),
      React.createElement("h2", { className: "text-4xl font-bold text-green-600 mb-2" }, "תודה על הדירוג המושלם!"),
      React.createElement("p", { className: "text-slate-700 text-2xl" }, "את לקוחה מהחלומות 🌟"),
      React.createElement("p", { className: "text-slate-500 mt-4" }, "הדירוג שלכם נקלט בהצלחה.")
    );

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 flex flex-col items-center justify-center p-4 font-['Heebo',_sans-serif]" },
    React.createElement(
      "main",
      { className: "w-full max-w-5xl mx-auto" },
      React.createElement(
        "div",
        { className: "bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden md:grid md:grid-cols-2 md:gap-12 items-center" },
        React.createElement("div", { className: "hidden md:block p-8" }, React.createElement(Illustration, null)),
        React.createElement("div", { className: "p-8 md:p-12 text-center" }, surveyContent)
      )
    ),
    React.createElement(
        "footer",
        { className: "mt-10 text-sm text-slate-500/80" },
        React.createElement("p", null, `© ${new Date().getFullYear()} שירות לקוחות שאין כמותו. כל הזכויות שמורות (בערך).`)
    ),
    modalContent && React.createElement(FunnyMessageModal, {
      title: modalContent.title,
      message: modalContent.message,
      buttons: modalContent.buttons,
      onClose: modalContent.onClose,
      iconType: modalContent.iconType
    })
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(StrictMode, null, React.createElement(App, null)));