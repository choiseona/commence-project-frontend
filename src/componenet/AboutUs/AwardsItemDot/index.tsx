interface AwardsItemDot {
    color:number;
}

const ColorConfig = [
    "#FFFFFF",
    "#FEFEFE",
    "#FCFCFC",
    "#FBFBFB",
    "#F8F8F8",
    "#F5F5F5",
    "#F1F1F1",
    "#EFEFEF",
    "#E9E9E9",
    "#E4E4E4",
    "#DFDFDF",
    "#DADADA",
    "#D2D2D2",
    "#C7C7C7",
    "#BCBCBC",
    "#B5B5B5",
    "#A1A1A1",
    "#8F8F8F",
    "#7F7F7F",
    "#6A6A6A",
    "#3F3F3F",
    "#303030",
    "#1B1B1B",
    "#0C0C0C",
  ];

function AwardsItemDot({color}:AwardsItemDot) {
    
    return <svg
    className="z-[4] mt-[1rem]"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_457_481)">
      <circle
        cx="9.77344"
        cy="5.74902"
        r="5"
        fill={`${ColorConfig[color]}`}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_457_481"
        x="0.773438"
        y="0.749023"
        width="18"
        height="18"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_457_481"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_457_481"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
}

export default AwardsItemDot;