interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function SpotifySmallLogo({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1.5C10.0585 1.5 2 9.78239 2 20C2 30.2176 10.0585 38.5 20 38.5C29.9415 38.5 38 30.2176 38 20C38 9.78366 29.9415 1.50126 20 1.5ZM28.2551 28.1814C27.932 28.7267 27.2405 28.8972 26.7124 28.5652C22.486 25.9104 17.1652 25.3108 10.8999 26.7814C10.2956 26.9241 9.69376 26.5353 9.55619 25.9142C9.4174 25.2931 9.79447 24.6745 10.4 24.5332C17.2561 22.9236 23.1382 23.6167 27.8829 26.5959C28.4111 26.9304 28.5793 27.6386 28.2551 28.1814ZM30.4573 23.1458C30.0508 23.825 29.1861 24.0371 28.5265 23.6205C23.6897 20.5643 16.3128 19.6794 10.5904 21.4643C9.84852 21.6954 9.06489 21.2649 8.83889 20.5037C8.61535 19.7412 9.03419 18.9371 9.77482 18.7048C16.3116 16.6661 24.4389 17.6533 29.9943 21.1626C30.6551 21.5805 30.8639 22.4679 30.4573 23.1458ZM30.6465 17.8994C24.8442 14.3585 15.2737 14.0328 9.73429 15.7597C8.84504 16.0374 7.9042 15.5211 7.63521 14.6072C7.36622 13.6932 7.86735 12.7262 8.75783 12.4485C15.1165 10.4653 25.6856 10.8478 32.3648 14.9228C33.1644 15.4113 33.4272 16.4729 32.9531 17.2935C32.4802 18.1165 31.4448 18.388 30.6465 17.8994Z"
        fill={color}
      />
    </svg>
  );
}

export default SpotifySmallLogo;