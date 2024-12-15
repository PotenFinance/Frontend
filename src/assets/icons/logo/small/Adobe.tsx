interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function AdobeSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6935 4.0452H38V35.9548L24.6935 4.0452ZM15.3172 4.0452H2V35.9548L15.3172 4.0452ZM20.0054 15.8056L28.4834 35.9548H22.9267L20.3911 29.5383H14.187L20.0054 15.8056Z"
        fill={color || '#E3392E'}
      />
    </svg>
  );
}

export default AdobeSmallLogo;
