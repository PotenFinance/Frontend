interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function YoutubeLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.9347 11.3351C37.5224 9.7887 36.3025 8.56896 34.7505 8.15088C31.9443 7.40057 20.685 7.40057 20.685 7.40057C20.685 7.40057 9.43146 7.40057 6.61949 8.15088C5.07328 8.56318 3.85339 9.78307 3.43531 11.3351C2.685 14.1413 2.685 19.9999 2.685 19.9999C2.685 19.9999 2.685 25.8587 3.43531 28.665C3.84762 30.2113 5.06751 31.4311 6.61949 31.8491C9.43146 32.5994 20.685 32.5994 20.685 32.5994C20.685 32.5994 31.9443 32.5994 34.7505 31.8491C36.2969 31.4368 37.5166 30.2169 37.9347 28.665C38.685 25.8587 38.685 20.0001 38.685 20.0001C38.685 20.0001 38.685 14.1413 37.9347 11.3351Z"
        fill={color || '#FF0000'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0885 25.4006L26.4406 19.9999L17.0885 14.5994V25.4006Z"
        fill={'white'}
      />
    </svg>
  );
}

export default YoutubeLogo;
