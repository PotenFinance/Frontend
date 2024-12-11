interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function DisneySmallLogo({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.522 8.71163C36.5877 14.6317 38.5956 21.3094 37.845 28.9969C37.8419 29.0294 37.8248 29.0593 37.7978 29.0789C34.7189 31.3178 31.7358 32.6766 28.7946 33.5777C28.7717 33.5846 28.7472 33.5842 28.7245 33.5767C28.7019 33.5691 28.6822 33.5546 28.6682 33.5354C27.9887 32.5991 27.3713 31.612 26.8304 30.5754C26.7993 30.5143 26.8277 30.4408 26.8916 30.4167C27.8721 30.0508 28.8045 29.6123 29.7014 29.0931C29.772 29.0521 29.7765 28.9519 29.7113 28.9037C29.5209 28.7638 29.3324 28.6167 29.1519 28.4697C29.1182 28.4425 29.0727 28.4371 29.0345 28.4554C23.2119 31.1182 16.8336 31.1182 10.9423 28.4554C10.904 28.4385 10.8586 28.4443 10.8257 28.471C10.6457 28.6181 10.4567 28.7638 10.2682 28.9037C10.2029 28.9519 10.2083 29.0521 10.2794 29.0931C11.1763 29.6025 12.1086 30.0508 13.0878 30.4185C13.1513 30.4426 13.1814 30.5143 13.1499 30.5754C12.6207 31.6133 12.0033 32.6004 11.3112 33.5367C11.2811 33.5746 11.2316 33.592 11.1848 33.5777C8.25756 32.6766 5.27451 31.3178 2.19562 29.0789C2.16997 29.0593 2.15152 29.0281 2.14882 28.9955C1.52152 22.3459 2.79996 15.613 7.46691 8.71029C7.47816 8.69202 7.49526 8.67776 7.51506 8.66929C9.8114 7.62557 12.2715 6.85771 14.8428 6.41919C14.8896 6.41206 14.9364 6.43345 14.9607 6.47445C15.2784 7.03152 15.6416 7.7459 15.8873 8.32971C18.5976 7.91971 21.3503 7.91971 24.1173 8.32971C24.363 7.75838 24.7136 7.03152 25.0299 6.47445C25.0412 6.45411 25.0587 6.43782 25.0798 6.42789C25.101 6.41797 25.1248 6.41492 25.1478 6.41919C27.7205 6.85905 30.1806 7.62691 32.4752 8.66929C32.4954 8.67776 32.5121 8.69202 32.522 8.71163ZM17.2652 21.3548C17.2935 19.389 15.8463 17.7624 14.0297 17.7624C12.2279 17.7624 10.7947 19.3748 10.7947 21.3548C10.7947 23.3344 12.2562 24.9468 14.0297 24.9468C15.8319 24.9468 17.2652 23.3344 17.2652 21.3548ZM29.2271 21.3548C29.2554 19.389 27.8082 17.7624 25.992 17.7624C24.1898 17.7624 22.7565 19.3748 22.7565 21.3548C22.7565 23.3344 24.2181 24.9468 25.992 24.9468C27.8082 24.9468 29.2271 23.3344 29.2271 21.3548Z"
        fill={color}
      />
    </svg>
  );
}

export default DisneySmallLogo;
