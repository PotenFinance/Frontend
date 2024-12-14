interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function EyeIcon({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M1.68286 4.79999C1.68286 4.79999 5.26446 0.799988 9.68286 0.799988C14.1013 0.799988 17.6829 4.79999 17.6829 4.79999"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M17.3181 8.836C17.5613 9.1768 17.6829 9.348 17.6829 9.6C17.6829 9.8528 17.5613 10.0232 17.3181 10.364C16.2253 11.8968 13.4341 15.2 9.68286 15.2C5.93086 15.2 3.14046 11.896 2.04766 10.364C1.80446 10.0232 1.68286 9.852 1.68286 9.6C1.68286 9.3472 1.80446 9.1768 2.04766 8.836C3.14046 7.3032 5.93166 4 9.68286 4C13.4349 4 16.2253 7.304 17.3181 8.836Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M12.083 9.59998C12.083 8.96346 11.8301 8.35301 11.38 7.90293C10.9299 7.45284 10.3195 7.19998 9.68296 7.19998C9.04644 7.19998 8.43599 7.45284 7.9859 7.90293C7.53582 8.35301 7.28296 8.96346 7.28296 9.59998C7.28296 10.2365 7.53582 10.847 7.9859 11.297C8.43599 11.7471 9.04644 12 9.68296 12C10.3195 12 10.9299 11.7471 11.38 11.297C11.8301 10.847 12.083 10.2365 12.083 9.59998Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default EyeIcon;
