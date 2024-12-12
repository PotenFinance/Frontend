interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function NaverSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.685" y="2" width="36" height="36" rx="4" fill={color || '#03C75A'} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.5926 9.15065V20.7703L16.5989 9.15065H9.83563V30.8494H16.7773V19.2391L24.7805 30.8494H31.5343V26.7257V9.15065H24.5926Z"
        fill={color || 'white'}
      />
    </svg>
  );
}

export default NaverSmallLogo;
