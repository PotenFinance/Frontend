interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function WatchaSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_561_3240)">
        <mask
          id="mask0_561_3240"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="41"
          height="40"
        >
          <path d="M40.685 0H0.684998V40H40.685V0Z" fill={'white'} />
        </mask>
        <g mask="url(#mask0_561_3240)">
          <mask
            id="mask1_561_3240"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="37"
            height="36"
          >
            <path
              d="M2.685 14.48C2.685 10.1116 2.685 7.92739 3.53515 6.25887C4.28296 4.79121 5.47621 3.59796 6.94387 2.85015C8.61239 2 10.7966 2 15.165 2H26.205C30.5734 2 32.7576 2 34.4261 2.85015C35.8938 3.59796 37.087 4.79121 37.8349 6.25887C38.685 7.92739 38.685 10.1116 38.685 14.48V25.52C38.685 29.8884 38.685 32.0726 37.8349 33.7411C37.087 35.2088 35.8938 36.402 34.4261 37.1499C32.7576 38 30.5734 38 26.205 38H15.165C10.7966 38 8.61239 38 6.94387 37.1499C5.47621 36.402 4.28296 35.2088 3.53515 33.7411C2.685 32.0726 2.685 29.8884 2.685 25.52V14.48Z"
              fill={'white'}
            />
          </mask>
          <g mask="url(#mask1_561_3240)">
            <path d="M38.685 2H2.685V38H38.685V2Z" fill={'black'} />
          </g>
          <path
            d="M13.283 32.48L18.3776 32.1423L20.3773 19.522H20.9023L22.8552 31.8447L28.2591 31.4851L32.5946 7.4H27.4114L25.4301 25.7753L24.8248 25.8154L22.7298 12.5832H18.5498L16.3661 26.3772L15.7643 26.4173L13.8933 12.5832H8.685L13.283 32.48Z"
            fill={color || '#FF0558'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_561_3240">
          <rect width="40" height="40" fill={'white'} transform="translate(0.684998)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WatchaSmallLogo;
