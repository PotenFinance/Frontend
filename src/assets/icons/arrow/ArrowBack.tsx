interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function ArrowBackIcon({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_278_2000" fill="white">
        <path d="M12 0L-4.37114e-07 10L12 20" />
      </mask>
      <path
        d="M13.2804 1.53644C14.1289 0.829314 14.2436 -0.431815 13.5364 -1.28037C12.8293 -2.12892 11.5682 -2.24357 10.7196 -1.53644L13.2804 1.53644ZM-4.37114e-07 10L-1.28037 8.46356C-1.73635 8.84355 -2 9.40644 -2 10C-2 10.5936 -1.73635 11.1565 -1.28037 11.5364L-4.37114e-07 10ZM10.7196 21.5364C11.5682 22.2436 12.8293 22.1289 13.5364 21.2804C14.2436 20.4318 14.1289 19.1707 13.2804 18.4636L10.7196 21.5364ZM10.7196 -1.53644L-1.28037 8.46356L1.28037 11.5364L13.2804 1.53644L10.7196 -1.53644ZM-1.28037 11.5364L10.7196 21.5364L13.2804 18.4636L1.28037 8.46356L-1.28037 11.5364Z"
        fill={color}
        mask="url(#path-1-inside-1_278_2000)"
      />
    </svg>
  );
}

export default ArrowBackIcon;
