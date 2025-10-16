import React from 'react';

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

export default Illustration;
