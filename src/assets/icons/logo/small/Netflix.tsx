interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function NetflixSmallLogo({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0917 2H10.345V38C12.5576 37.4649 14.8689 37.1969 17.0917 37.0961V2Z"
        fill={color}
      />
      <path
        d="M17.0917 2H10.345V29.545C12.5576 29.0099 14.8689 28.742 17.0917 28.6412V2Z"
        fill={color}
      />
      <path d="M29.655 38V2H22.9083V37.1678C26.8472 37.424 29.655 38 29.655 38Z" fill={color} />
      <path
        d="M29.655 38V14.1084H22.9083V37.1678C26.8472 37.424 29.655 38 29.655 38Z"
        fill={color}
      />
      <path
        d="M29.655 38L17.0917 2H10.345L22.6113 37.1491C26.7054 37.3948 29.655 38 29.655 38Z"
        fill={color}
      />
    </svg>
  );
}

export default NetflixSmallLogo;
