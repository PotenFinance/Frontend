interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function KakaoSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.68506" y="2" width="36" height="36" rx="4" fill={color || '#FFCD00'} />
      <path
        d="M20.6759 8.12209C13.5674 8.12209 7.83484 12.7081 7.83484 18.2756C7.83484 21.8895 10.2196 25.0538 13.7967 26.8608L12.586 31.3827C12.5632 31.4505 12.5597 31.5232 12.5759 31.5928C12.5921 31.6625 12.6274 31.7263 12.6777 31.777C12.7512 31.8418 12.8458 31.8777 12.9437 31.8779C13.025 31.8714 13.102 31.8393 13.1639 31.7862L18.3737 28.2733C19.1427 28.3795 19.9179 28.4345 20.6942 28.4383C27.7935 28.4383 33.5353 23.8523 33.5353 18.2756C33.5353 12.6989 27.7751 8.12209 20.6759 8.12209Z"
        fill={color || '#392020'}
      />
    </svg>
  );
}

export default KakaoSmallLogo;
