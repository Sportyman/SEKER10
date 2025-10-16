import React, { useState } from 'react';

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

export default StarRating;
