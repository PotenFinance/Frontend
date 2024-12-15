interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function CoupangLargeLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width || '160'}
      height={height || '56'}
      viewBox="0 0 160 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_561_2898)">
        <path
          d="M85.9055 16.0157C84.9607 14.2047 83.0709 12.1575 79.0551 12.1575C76.4567 12.1575 74.6457 13.2598 73.5433 14.3622V12.8661C73.5433 12.7087 73.3859 12.6299 73.3071 12.6299H69.7638C69.6063 12.6299 69.5276 12.7874 69.5276 12.8661V42.7874C69.5276 42.9449 69.6851 43.0236 69.7638 43.0236H73.6221C73.7796 43.0236 73.8583 42.8661 73.8583 42.7874V32.6299C75.0394 33.6535 76.6929 34.5984 79.1339 34.5984C83.1496 34.5984 85.0394 32.5512 85.9843 30.7401C86.9292 28.8504 87.0079 26.8819 87.0079 26.4882V20.4252C86.9292 19.9527 86.8504 17.9055 85.9055 16.0157ZM82.441 26.6457C82.441 27.5905 81.8111 30.7401 78.1103 30.7401C74.4095 30.7401 73.7796 27.5118 73.7796 26.6457V20.189C73.7796 19.2441 74.4095 16.0945 78.1103 16.0945C81.8111 16.0945 82.441 19.3228 82.441 20.189V26.6457Z"
          fill={color || '#F7552F'}
        />
        <path
          d="M27.9528 20.3464C27.9528 19.9527 28.0315 17.9842 29.0551 16.0945C30.0787 14.2835 32.2835 12.2362 36.6929 12.2362C41.1024 12.2362 43.3071 14.2835 44.3307 16.0945C45.4331 17.9842 45.4331 19.9527 45.4331 20.3464V26.4094C45.4331 26.8031 45.3543 28.7716 44.3307 30.6614C43.3071 32.4724 41.1811 34.5197 36.6929 34.5197C32.2835 34.5197 30.0787 32.4724 29.0551 30.6614C27.9528 28.7716 27.9528 26.8031 27.9528 26.4094V20.3464ZM32.3622 26.5669C32.3622 27.5118 32.9921 30.6614 36.6929 30.6614C40.3937 30.6614 41.1024 27.4331 41.1024 26.5669V20.1102C41.1024 19.1653 40.4724 16.0157 36.6929 16.0157C32.9134 16.0157 32.3622 19.2441 32.3622 20.1102V26.5669Z"
          fill={color || '#935227'}
        />
        <path
          d="M65.9843 12.8661C65.9843 12.7087 65.9055 12.6299 65.7481 12.6299H61.8898C61.7323 12.6299 61.6536 12.7874 61.6536 12.8661V26.5669C61.6536 27.5118 61.0236 30.6614 57.3229 30.6614C53.6221 30.6614 52.9134 27.4331 52.9134 26.5669V12.8661C52.9134 12.7087 52.7559 12.6299 52.6772 12.6299H48.8189C48.6614 12.6299 48.5827 12.7874 48.5827 12.8661V26.4094C48.5827 26.8031 48.5827 28.7716 49.6063 30.6614C50.5512 32.4724 52.441 34.5197 56.4567 34.5197C57.7953 34.5197 58.8977 34.2835 59.7638 33.811C60.6299 33.4173 61.4173 32.8661 61.9685 32.315V33.811C61.9685 33.9685 62.126 34.0472 62.2048 34.0472H65.7481C65.9055 34.0472 65.9843 33.8898 65.9843 33.811V12.8661Z"
          fill={color || '#935227'}
        />
        <path
          d="M106.142 20.1102C106.142 18.3779 105.276 14.3622 101.417 12.7874C97.6378 11.2126 92.6772 12.9449 91.1024 13.5748L90.7874 13.7323C90.6299 13.811 90.5512 13.9685 90.6299 14.126L91.7323 17.2756C91.811 17.4331 91.8897 17.5118 92.0472 17.4331C92.126 17.4331 92.126 17.3543 92.2047 17.3543C93.7008 16.5669 97.559 15.3071 99.9212 16.4094C102.283 17.5118 102.047 19.9527 102.047 20.2677V20.8976C100.945 20.1102 99.3701 19.3228 97.0866 19.2441C93.0709 19.2441 91.1811 21.2126 90.2362 22.8661C89.2913 24.6771 89.2126 26.5669 89.2126 26.8819C89.2126 27.2756 89.2913 29.1653 90.2362 30.8976C91.1811 32.6299 93.0709 34.5197 97.0866 34.5197C99.4488 34.5197 101.024 33.6535 102.205 32.7874V33.811C102.205 33.9685 102.362 34.0472 102.441 34.0472H105.827C105.984 34.0472 106.063 33.8897 106.063 33.811V20.189C106.115 20.189 106.142 20.1627 106.142 20.1102ZM102.047 26.9606C102.047 27.8268 101.417 30.8189 97.7953 30.8189C94.1732 30.8189 93.5433 27.8268 93.5433 26.9606V26.6457C93.5433 25.7795 94.1732 22.7874 97.7953 22.7874C101.417 22.7874 102.047 25.7795 102.047 26.6457V26.9606Z"
          fill={color || '#FFC400'}
        />
        <path
          d="M149.685 12.3149C147.402 12.2362 145.984 13.1811 145.039 14.2047C143.78 13.1023 141.811 12.2362 138.819 12.2362C134.409 12.2362 132.205 14.2047 131.181 15.937C130.079 17.748 130.079 19.6378 130.079 20.0315V20.2677C130.079 20.6614 130.157 22.5512 131.181 24.3622C131.654 25.1496 132.362 25.937 133.386 26.6457C131.732 27.5905 130.236 29.3228 130.236 32.3937V34.0472C130.236 34.2047 130.394 34.3622 130.472 34.3622H143.15C144.646 34.3622 145.433 35.3858 145.669 36.3307C145.906 37.5118 145.512 39.0866 143.465 40.189L143.307 40.2677C143.15 40.3464 143.15 40.5039 143.228 40.6614L144.961 43.7323C145.039 43.8897 145.197 43.8897 145.354 43.811C145.354 43.811 146.22 43.2598 146.535 43.1023C146.85 42.9449 147.087 42.7086 147.323 42.4724C149.528 40.4252 149.921 37.6693 149.449 35.4646C148.819 32.4724 146.299 30.7401 143.15 30.7401H134.409C134.882 28.063 137.953 28.1417 138.346 28.1417H138.819C143.228 28.1417 145.433 26.1732 146.457 24.4409C147.559 22.6299 147.559 20.7401 147.559 20.3464V19.9527C147.559 19.6378 147.559 18.2205 146.85 16.7244C147.402 16.3307 148.346 15.937 149.685 16.0157C149.843 16.0157 150 15.8583 150 15.7795V12.7086C150 12.4724 149.843 12.3149 149.685 12.3149ZM143.15 20.189C143.15 21.0551 142.52 24.0472 138.819 24.126C135.039 24.126 134.488 21.0551 134.488 20.189V19.9527C134.488 19.0866 135.118 16.0945 138.819 16.0157C142.598 16.0157 143.15 19.0866 143.15 19.9527V20.189Z"
          fill={color || '#31B4DD'}
        />
        <path
          d="M26.5354 29.9528L23.1496 28.2205C22.9921 28.1417 22.8346 28.2205 22.7559 28.378V28.4567C22.2047 29.5591 21.1024 30.7402 18.8189 30.8189C15.0394 30.8189 14.4882 27.5906 14.4882 26.7244V20.2677C14.4882 19.3228 15.1181 16.1732 18.8189 16.1732C21.1024 16.1732 22.2835 17.4331 22.7559 18.5354C22.8346 18.6142 22.9134 18.7717 23.0709 18.7717H23.2283L26.5354 17.0394C26.6929 16.9606 26.6929 16.8032 26.6142 16.6457C26.5354 16.4882 26.4567 16.4095 26.4567 16.252C25.4331 14.441 23.3071 12.3937 18.8189 12.3937C14.4094 12.3937 12.2047 14.441 11.1811 16.252C10.0787 17.9055 10 19.9528 10 20.3465V26.4095C10 26.8032 10.0787 28.7717 11.1024 30.6614C12.126 32.4724 14.252 34.5197 18.7402 34.5197H18.8189C23.2283 34.5197 25.4331 32.4724 26.4567 30.6614L26.6929 30.2677C26.6929 30.189 26.6142 30.0315 26.5354 29.9528Z"
          fill={color || '#935227'}
        />
        <path
          d="M126.063 16.0157C125.118 14.2047 123.15 12.1575 119.213 12.1575C116.614 12.1575 114.882 13.2598 113.701 14.3622V12.8661C113.701 12.7087 113.543 12.6299 113.465 12.6299H109.921C109.764 12.6299 109.685 12.7874 109.685 12.8661V33.8898C109.685 34.0472 109.843 34.126 109.921 34.126H113.78C113.937 34.126 114.016 33.9685 114.016 33.8898V19.9527C114.095 18.8504 114.882 16.0945 118.346 16.0157C122.126 16.0157 122.756 19.2441 122.756 20.1102V33.8898C122.756 34.0472 122.913 34.126 122.992 34.126H126.85C127.008 34.126 127.087 33.9685 127.087 33.8898V20.3464C127.087 19.9527 127.087 17.9055 126.063 16.0157Z"
          fill={color || '#88CC2F'}
        />
      </g>
      <defs>
        <clipPath id="clip0_561_2898">
          <rect
            width="140"
            height="31.7165"
            fill={color || 'white'}
            transform="translate(10 12.1417)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CoupangLargeLogo;
