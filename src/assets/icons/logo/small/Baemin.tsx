interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function BaeminSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.685" y="2" width="36" height="36" rx="4" fill={color || '#2AC1BC'} />
      <path
        d="M31.1167 20.8808H22.3459V12.3258H31.1167V20.8808ZM23.8844 28.7571V22.8805H26.4653V26.2664H36.2425V28.7571H23.8844ZM24.8406 18.4984H28.6149V14.7371H24.8406V18.4984ZM33.3525 22.5196H36.034V11.2429H33.3525V22.5196Z"
        fill={color || 'white'}
      />
      <path
        d="M12.4235 13.4087V24.8335H5.12756V13.4087H7.42979V16.3609H10.0609V13.4087H12.4235ZM10.0609 18.956H7.42979V22.4474H10.0609V18.956ZM18.1422 17.2439H16.4105V11.8247H14.0076V28.1969H16.4508L16.4105 19.7715H18.1422V28.1969H20.3572V11.8247H18.1422V17.2439Z"
        fill={color || 'white'}
      />
    </svg>
  );
}

export default BaeminSmallLogo;
