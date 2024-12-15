interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function PlusIcon({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      <path
        d="M16.3466 0.5H25.6115V41.5H16.3466V0.5ZM0.5 16.3628H41.5V25.5952H0.5V16.3628Z"
        fill={color}
      />
    </svg>
  );
}

export default PlusIcon;
