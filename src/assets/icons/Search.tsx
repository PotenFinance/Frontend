interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function SearchIcon({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="19.5" r="14" stroke={color} strokeWidth="5" />
      <line x1="35.2678" y1="34.2322" x2="40.2678" y2="39.2322" stroke={color} strokeWidth="5" />
    </svg>
  );
}

export default SearchIcon;
