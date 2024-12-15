interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function NaverLargeLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 161 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.849 14.5407L40.4553 41.4593H49.8702L51.0121 38.2314H60.0425L61.1844 41.4593H70.5993L60.2056 14.5407H50.849ZM55.5215 23.3621L58.4811 31.7756H52.5502L55.5098 23.3621H55.5215Z"
        fill={color || '#03C75A'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.6714 14.5407V41.4593H120.132V35.0035H108.294V31.7756H120.132V24.2361H108.294V20.9965H120.132V14.5407H99.6714Z"
        fill={color || '#03C75A'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.6114 14.5407L81.3659 32.2417L75.132 14.5407H66.2881L76.6934 41.4593H86.0501L96.4437 14.5407H87.6114Z"
        fill={color || '#03C75A'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6051 14.5407V28.9556L18.6892 14.5407H10.2997V41.4593H18.9106V27.0561L28.8382 41.4593H37.216V36.3436V14.5407H28.6051Z"
        fill={color || '#03C75A'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.296 27.464H133.055V22.0802H137.296C138.729 22.0802 139.894 23.2805 139.894 24.7721C139.894 26.2637 138.729 27.464 137.296 27.464ZM143.705 32.2301L144.497 31.8921C147.527 30.587 149.065 27.7436 149.065 24.1545C149.065 20.7518 147.864 18.2347 145.499 16.6732C143.297 15.2166 140.442 14.5407 136.527 14.5407H125.539V41.4593H134.15V33.9198H137.249L142.493 41.4593H150.3L143.716 32.2184L143.705 32.2301Z"
        fill={color || '#03C75A'}
      />
    </svg>
  );
}

export default NaverLargeLogo;
