interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function CoupangSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.685 20L36.5349 22.3045L37.961 25.1233L35.2541 26.7206L35.8289 29.8328L32.7858 30.5923L32.4735 33.7426L29.3409 33.608L28.1654 36.5434L25.1979 35.5227L23.2468 38L20.685 36.1737L18.1232 38L16.1721 35.5227L13.2046 36.5434L12.0291 33.608L8.89649 33.7406L8.58422 30.5902L5.54113 29.8328L6.11594 26.7206L3.40898 25.1233L4.83505 22.3045L2.685 20L4.83505 17.6955L3.40898 14.8767L6.11594 13.2794L5.54113 10.1672L8.58422 9.40775L8.89649 6.2574L12.0291 6.39201L13.2046 3.45664L16.1721 4.47729L18.1232 2L20.685 3.82632L23.2468 2L25.1979 4.47729L28.1654 3.45664L29.3409 6.39201L32.4735 6.2594L32.7858 9.40976L35.8289 10.1672L35.2541 13.2794L37.961 14.8767L36.5349 17.6955L38.685 20Z"
        fill={color || '#F7552F'}
      />
      <path
        d="M27.4846 25.102L24.6732 23.7415C24.5425 23.6796 24.4117 23.7415 24.3463 23.8652V23.927C23.8886 24.7928 22.9733 25.7204 21.0773 25.7823C17.939 25.7823 17.4813 23.2467 17.4813 22.5665V17.4954C17.4813 16.7533 18.0044 14.2796 21.0773 14.2796C22.9733 14.2796 23.954 15.2691 24.3463 16.1349C24.4117 16.1967 24.4771 16.3204 24.6078 16.3204H24.7386L27.4846 14.9598C27.6154 14.898 27.6154 14.7743 27.55 14.6506C27.4846 14.527 27.4192 14.4651 27.4192 14.3414C26.5693 12.9191 24.804 11.3111 21.0773 11.3111C17.4159 11.3111 15.5853 12.9191 14.7353 14.3414C13.82 15.6401 13.7546 17.248 13.7546 17.5572V22.3191C13.7546 22.6283 13.82 24.1744 14.6699 25.6586C15.5199 27.081 17.2852 28.6889 21.0119 28.6889H21.0773C24.7386 28.6889 26.5693 27.081 27.4192 25.6586L27.6154 25.3494C27.6154 25.2875 27.55 25.1638 27.4846 25.102Z"
        fill={color || 'white'}
      />
    </svg>
  );
}

export default CoupangSmallLogo;