interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function YoutubeSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.685 38C30.6261 38 38.685 29.9411 38.685 20C38.685 10.0589 30.6261 2 20.685 2C10.7439 2 2.685 10.0589 2.685 20C2.685 29.9411 10.7439 38 20.685 38Z"
        fill={color || '#FF0000'}
      />
      <path
        d="M20.6849 30.8C26.6333 30.8 31.4554 25.9647 31.4554 20C31.4554 14.0353 26.6333 9.2 20.6849 9.2C14.7365 9.2 9.91443 14.0353 9.91443 20C9.91443 25.9647 14.7365 30.8 20.6849 30.8Z"
        fill={color || '#FF0000'}
        stroke="white"
        stroke-width="1.2"
      />
      <path d="M16.9965 25.25L26.4391 20L16.9965 14.75V25.25Z" fill={color || 'white'} />
    </svg>
  );
}

export default YoutubeSmallLogo;
